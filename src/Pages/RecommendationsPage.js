
// @flow
import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/StarBorder';

import type { Outage, Model, ModelParams, QuestionnaireResponse } from '../lib/types'
import { OUTAGES, STORAGE_DEVICES } from '../lib/data';
import { generate_model, get_devices } from '../lib/model';
import { simulate_outage } from '../lib/simulator';
import { assess_recommendation } from '../lib/recommender';
import { SingleRecommendationGraph } from '../Components/SingleRecommendationGraph';
import RecommendationPanel from '../Components/RecommendationPanel';
import TopBar from '../Components/TopBar';
import { blueGrey, green } from '@material-ui/core/colors';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export const RecommendationsPage = (props: {
  location: {
    state: {
      response: QuestionnaireResponse
    }
  }
}): React$Element<"div"> => {
  let response;
  if (props.location.state) {
    response = props.location.state.response;
    localStorage.setItem('response', JSON.stringify(props.location.state));
  } else {
    let state = localStorage.getItem('response');
    if (state != null && state != undefined) {
      response = JSON.parse(state).response;
    } else {
      console.log("ERROR");
    }
  }
  console.log(response);

  const classes = useStyles({
    palette: {
      primary: {
        main: blueGrey[50],
      },
      secondary: {
        main: green[800],
      },
    },
    spacing: 8
  });
  let [panels, setPanels] = useState([]);

  useEffect(() => {
    let M = 50;

    // Generate M/2 example summer days and M/2 winter days
    let models = (() => {
      let m = [];
      let summer_devices = get_devices(response, { summer: true });
      let winter_devices = get_devices(response, { summer: false });
      for (let i = 0; i < M / 2; i++) {

        m.push(generate_model(summer_devices, response.summerUsage * 1000 / 30))
        m.push(generate_model(winter_devices, response.winterUsage * 1000 / 30))
      }
      return m;
    })()
    console.log(models);

    // Choose recommendations

    // Analyze recommendation performance
    let _panels = [];
    for (let brand of Object.keys(STORAGE_DEVICES)) {
      // choose the first for now (placeholder)
      let recommendation = STORAGE_DEVICES[brand][0];

      // Details to show on the comparison page
      // Description will contain rec performance on 3 classes of outages
      let panel = {
        title: brand,
        subheader: recommendation.name,
        output: recommendation.peak_discharge,
        capacity: recommendation.capacity,
        description: [],
        buttonText: 'See details',
        buttonVariant: 'outlined',
        perf: {}
      }

      panel.perf = assess_recommendation(recommendation, models, OUTAGES);
      for (let type in OUTAGES) {
        // count successes
        let successes = panel.perf[type].reduce((a, b) => a + (b === 4), 0)

        let percentage = Math.round(successes * 100 / M);
        panel.description.push(`Prevents ${percentage}% of ${type} outages`)
      }
      _panels.push(panel);
    }

    setPanels(_panels);
  }, [])


  return (
    <div>
      <CssBaseline />
      <TopBar />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Recommendations
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          These are your recommended storage devices: we've provided 3 choices from 3 leading brands that
          we hope will help you make an informed decision about your home power system.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {panels.map((panel) => (
            <RecommendationPanel panel={panel} classes={classes} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RecommendationsPage;