import React, { useEffect, useContext } from 'react';
import { WeatherContext } from './contexts/weatherContext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Spinner from './assets/spinner.gif';
import arrow from './assets/arrow_wht.png';
import useStyles from './styles/CurrentWeatherCardStyles';

function CurrentWeatherCard() {
    const classes = useStyles();
    const {
        currentWeather,
        isLoading, 
        getCurrentWeather
    } = useContext(WeatherContext);

    useEffect(() => {
        async function getWeather() {
            await getCurrentWeather();
        }
        getWeather();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(blue[200]),
            backgroundColor: 'rgba(255,255,255, 0.5)',//fade(blue[200], 0.30),
            '&:hover': {
                backgroundColor: blue[500],
                color: theme.palette.getContrastText(blue[500]),
            },
        },
    }))(Button);

    const loadingSpinner = <img style={{width: 20}} src={Spinner} alt="Loading..."/>

    // if currentWeather is an empty object return null
    if(JSON.stringify(currentWeather) === JSON.stringify({})){
        return null;
    }
    return (
        <Card className={classes.root}>
            <CardHeader title="Raspberry Sky" className={classes.header} />
            <Divider className={classes.divider} variant="middle" />
            <CardContent className={classes.content}>
                <Typography className={classes.temp} variant="h2" align="left">
                    {(currentWeather.AMBIENT_TEMPERATURE).toFixed(0)}&deg;
                </Typography>
                <div className={classes.list}>
                    <Typography>
                        humidity {(currentWeather.HUMIDITY).toFixed(0)}%
                    </Typography>
                    <Typography>
                        {(currentWeather.AIR_PRESSURE/33.864).toFixed(2)} inHg
                    </Typography>
                    <Typography>
                        ground temp {(currentWeather.GROUND_TEMPERATURE).toFixed(0)}&deg;
                    </Typography>
                    {
                        currentWeather.AMBIENT_TEMPERATURE < 50 && 
                        currentWeather.WIND_GUST_SPEED >= 3 &&
                        <Typography>
                            wind chill {(currentWeather.WIND_CHILL).toFixed(0)}&deg;
                        </Typography>
                    }
                    {
                        currentWeather.AMBIENT_TEMPERATURE >= 50 && 
                        <Typography>
                            heat index {(currentWeather.HEAT_IDX).toFixed(0)}&deg;
                        </Typography>
                    }
                    {
                        currentWeather.TOTAL_RAIN > 0 &&
                        <Typography>
                            {currentWeather.TOTAL_RAIN} in total
                        </Typography>
                    }
                    <div className={classes.wind}>
                        <img style={{transform: `rotate(${currentWeather.WIND_DIRECTION}deg)`}} className={classes.arrow} src={arrow} alt="arrow"/>
                        <Typography className={classes.gust} align="left">
                            {(currentWeather.WIND_GUST_SPEED).toFixed(1)} mph
                        </Typography>
                    </div>
                </div>
            </CardContent>
            <Divider className={classes.divider} variant="middle" />
            <Typography align="center">
                {new Date(currentWeather.CREATED).toLocaleString()}
            </Typography>
            <CardActions className={classes.action}>
                <ColorButton 
                    color="primary"
                    size="small" 
                    className={classes.button}
                    onClick={isLoading ? null : async () => getCurrentWeather()}
                    startIcon={isLoading && loadingSpinner}
                >
                    {isLoading ? 'Loading...' : 'Refresh'}
                </ColorButton>
            </CardActions>
        </Card>
    );
}

export default CurrentWeatherCard;