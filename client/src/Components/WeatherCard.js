import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 230
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function WeatherCard({weatherInfo, loading}) {
  const classes = useStyles();

  return (
    <div centered>
      { loading 
      ? <Skeleton variant="rect" width={275} height={230} />
      : weatherInfo 
        ? <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                Weather in {weatherInfo.location.name +", "+ weatherInfo.location.country}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {weatherInfo.location.lat +" "+ weatherInfo.location.lon}
              </Typography>
              <Typography variant="body2" component="p">
                {weatherInfo.current.temperature +" C"}
              </Typography>
              <img src={weatherInfo.current.weather_icons} alt={weatherInfo.current.weather_code}/>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        : null
      }
    </div>
  );
}

export default WeatherCard;