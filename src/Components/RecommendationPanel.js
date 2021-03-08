// @flow

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import { SingleRecommendationGraph } from '../Components/SingleRecommendationGraph';


export const RecommendationPanel = (props: {
  panel: any,
  classes: any,
}): React$Element<"div"> => {
  let { panel, classes } = props;
  return <Grid item key={panel.title} xs={12} md={3}>
    <Card>
      <CardHeader
        title={panel.title}
        subheader={panel.subheader}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
        action={panel.title === 'Tesla Powerwall' ? <StarIcon /> : null}
        className={classes.cardHeader}
      />
      <CardContent>
        <div className={classes.cardPricing}>
          <Typography component="h6" variant="h6" color="textPrimary">
            {panel.type}
          </Typography>
        </div>
        <div className={classes.cardPricing}>
          <Typography variant="h4" color="textSecondary">
            $
          </Typography>
          <Typography component="h2" variant="h3" color="textPrimary">
            {panel.cost}
          </Typography>

        </div>
        <div className={classes.cardPricing}>
          <Typography component="h4" variant="h4" color="textPrimary">
            {Math.round(panel.output / 100) / 10}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            kW output
          </Typography>
        </div>
        <div className={classes.cardPricing}>
          <Typography component="h4" variant="h4" color="textPrimary">
            {panel.capacity === 0 ? "--" : Math.round(panel.capacity / 100) / 10}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            kWh capacity
          </Typography>
        </div>
        <ul>
          {panel.description.map((line) => (
            <Typography component="li" variant="subtitle1" align="center" key={line}>
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button fullWidth variant={panel.buttonVariant} color="secondary">
          {panel.buttonText}
        </Button>
      </CardActions>
      <SingleRecommendationGraph data={panel.perf} />
    </Card>
  </Grid>
}

export default RecommendationPanel;