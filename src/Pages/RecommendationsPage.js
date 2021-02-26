
// @flow
import React from 'react';
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
// export const RecommendationsPage = (props: {
//   location: {
//     state: {
//       response: QuestionnaireResponse
//     }
//   }
// }): React.Node => {
//   let [recPerf, setRecPerf] = useState({
//     "tesla": {
//       "15m": "95%",
//       "30m": "75%",
//       "2h": "30%",
//     },
//     "sonnen": {
//       "15m": "90%",
//       "30m": "60%",
//       "2h": "25%",
//     }
//   });
//   return <>
//     <h1>Recommendations</h1>
//     {Object.entries(recPerf).map(([rec, perf]) => (<>
//       <h2>{rec}</h2>
//       {
//         Object.entries(perf).map(([length, percentage]) => (
//           <>
//             <h3>{length}</h3>
//             <p>{percentage}</p>
//           </>
//         ))
//       }
//     </>))}
//   </>
// }


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

const tiers = [
  {
    title: 'Sonnen Eco',
    subheader: 'Flexible choice',
    price: '3500',
    capacity: '3000',
    description: ['2x Sonnen Eco base units', 'Requires inverter'],
    buttonText: 'See details',
    buttonVariant: 'outlined',
  },
  {
    title: 'Tesla Powerwall',
    subheader: 'All in one',
    price: '15 000',
    capacity: '6500',
    description: [
      'Inverter included',
      'Supports PV systems',
    ],
    buttonText: 'See details',
    buttonVariant: 'contained',
  },
  {
    title: 'Lead-acid battery',
    subheader: 'Affordable option',
    price: '300',
    capacity: '450',
    description: [
      'Requires inverter and charge controller',
    ],
    buttonText: 'See details',
    buttonVariant: 'outlined',
  },
];

export const RecommendationsPage = (): React$Element<"div"> => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
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
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Tesla Powerwall' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.capacity}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      Wh
                    </Typography>
                  </div>
                  <div className={classes.cardPricing}>
                    <Typography component="h4" variant="h4" color="textPrimary">
                      ${tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RecommendationsPage;