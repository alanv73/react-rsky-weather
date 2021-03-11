import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import arrow from './assets/arrow_wht.png';

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    maxWidth: 300,
    // width: 250,
    borderRadius: 16,
    background: 'rgba(0,0,0,0.6)',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  topContent: ({ color }) => {
    return {
      backgroundColor: 'transparent',
      padding: '1rem 1.5rem 0.5rem 1.5rem',
    };
  },
  bottomContent: ({ color }) => {
    return {
      backgroundColor: 'transparent',
      padding: '0.5rem 1.5rem 1.5rem 1.5rem',
    };
  },
  maxTemp: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  minTemp: {
    fontFamily: 'Keania One',
    fontSize: '1.4rem',
    color: '#a0a0a0',
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    background: 'rgba(255,255,255, 0.5)',
    borderRadius: 20,
    padding: '5px 10px',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    // marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
  wind: {
    position: 'absolute',
    left: '60%',
    top: '35%',
    // border: '2px solid white',
    // borderRadius: 50,
    width: 70,
    height: 70,
  },
  gust: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    fontWeight: 500,
    fontSize: 9,
    position: 'absolute',
    bottom: -10,
    left: '25%',
  },
  arrow: {
    width: 35,
    height: 50,
    position: 'absolute',
    left: 'calc(50% - 17px)',
    top: 'calc(50% - 22px)',
  },
}));

export default function DaySummaryCard({ image, weather }) {
    const classes = useStyles({ color: '#203f52' });

    // if currentWeather is an empty object return null
    if(!weather){
        return null;
    }
    return (
        <CardActionArea className={classes.actionArea}>
            <Card className={classes.card}>
                <CardContent className={classes.topContent}>
                    <Typography align="center" className={classes.cardTitle}>
                        {moment(new Date(weather.CREATED_DATE)).format('dddd, MMM Do YYYY')}
                    </Typography>                        
                </CardContent>
                <CardContent className={classes.bottomContent}>
                    <Typography className={classes.maxTemp} variant={'h2'}>
                        {(weather.MAX_AMBIENT_TEMPERATURE).toFixed(0)}&deg;
                        <Typography className={classes.minTemp} variant={'caption'}>
                            {(weather.MIN_AMBIENT_TEMPERATURE).toFixed(0)}&deg;
                        </Typography>
                    </Typography>
                    <Typography className={classes.subtitle}>
                        humidity {(weather.AVG_HUMIDITY).toFixed(0)}%
                    </Typography>
                    <Typography className={classes.subtitle}>
                        {(weather.AVG_AIR_PRESSURE/33.864).toFixed(2)} inHg
                    </Typography>
                    {/* <Typography className={classes.subtitle}>
                        max gust {(weather.MAX_WIND_GUST_SPEED).toFixed(1)} mph
                    </Typography>
                    <Typography className={classes.subtitle}>
                        avg direction {(weather.AVG_WIND_DIRECTION).toFixed(0)}&deg;
                    </Typography> */}
                    {
                        weather.TOTAL_RAINFALL > 0 &&
                        <Typography className={classes.subtitle}>
                            rain {weather.TOTAL_RAINFALL} in
                        </Typography>
                    }
                    <div className={classes.wind}>
                        <img style={{transform: `rotate(${weather.AVG_WIND_DIRECTION}deg)`}} className={classes.arrow} src={arrow} alt="arrow"/>
                        <Typography className={classes.gust}>
                            {(weather.MAX_WIND_GUST_SPEED).toFixed(1)} mph
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}
