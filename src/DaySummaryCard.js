import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import arrow from './assets/arrow_wht.png';
import useStyles from './styles/DaySummaryCardStyles';

export default function DaySummaryCard({ color, weather }) {
    const classes = useStyles({ color });

    // if currentWeather is an empty object return null
    if(!weather){
        return null;
    }
    return (
        <CardActionArea className={classes.actionArea}>
            <Card className={classes.card}>
                <CardContent className={classes.topContent}>
                    <Typography align="center" className={classes.cardTitle}>
                        {moment(new Date(weather.CREATED_DATE)).utc().format('dddd, MMM Do')}
                        {/* {weather.CREATED_DATE} */}
                    </Typography>                        
                </CardContent>
                <CardContent className={classes.bottomContent}>
                    <div className={classes.cardData}>
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
                        {
                            weather.TOTAL_RAINFALL > 0 &&
                            <Typography className={classes.subtitle}>
                                rain {weather.TOTAL_RAINFALL} in
                            </Typography>
                        }
                    </div>
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
