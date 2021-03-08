
// @flow
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import RecommendationPanel from '../Components/RecommendationPanel';
import TopBar from '../Components/TopBar';
import { OUTAGES, STORAGE_DEVICES } from '../lib/data';
import { generate_model, get_devices } from '../lib/model';
import { assess_recommendation } from '../lib/recommender';
import type { QuestionnaireResponse } from '../lib/types';


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
    if (state !== null && state !== undefined) {
      response = JSON.parse(state).response;
    } else {
      console.log("ERROR");
    }
  }
  console.log(response);

  const classes = useStyles();
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
      // start with the base model
      let recommendation = STORAGE_DEVICES[brand][0];
      let perf;
      let percentages: { [string]: number } = {};

      for (recommendation of STORAGE_DEVICES[brand]) {
        perf = assess_recommendation(recommendation, models, OUTAGES);
        percentages = {};
        for (let [name, result] of Object.entries(perf)) {
          // count successes
          let successes = result.reduce((a, b) => a + (b === 4), 0);
          let percentage = Math.round(successes * 100 / M);
          percentages[name] = percentage;
        }

        let percentages_list: number[] = Object.values(percentages);
        if (percentages_list[0] < 90 || percentages_list[1] < 75 || percentages_list[2] < 50) {
          continue;
        } else {
          break;
        }
      }

      let panel = {
        title: brand,
        subheader: recommendation.name,
        output: recommendation.peak_discharge,
        capacity: recommendation.capacity,
        description: [],
        buttonText: 'See details',
        buttonVariant: 'outlined',
        perf: perf,
        cost: recommendation.cost,
        type: recommendation.type,
      }

      for (let [name, percentage] of Object.entries(percentages)) {
        panel.description.push(`Prevents ${percentage}% of ${name} outages`)
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
          According to your household's needs and power consumption patterns, we've provided 4 power solution choices
          from leading brands that we hope will help you make an informed decision about your home power system.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={2} alignItems="flex-end">
          {panels.map((panel) => (
            <RecommendationPanel panel={panel} classes={classes} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RecommendationsPage;