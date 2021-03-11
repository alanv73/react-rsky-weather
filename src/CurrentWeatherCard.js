import React, { useEffect, useContext } from 'react';
import { WeatherContext } from './contexts/weatherContext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    width: 300,
    height: 400,
    textAlign: 'center',
    margin: '30px auto',
    overflow: 'auto'
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '0 20px',
    textAlign: 'left',
    "& p": {
        background: 'rgba(196,196,196, 0.3)',
        borderRadius: theme.spacing(2),
        paddingLeft: 60,
        marginBottom: 5,

    }
  },
  button: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    borderRadius: theme.spacing(2),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

function CurrentWeatherCard() {
    const classes = useStyles();
    const {
        currentWeather, 
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
            backgroundColor: fade(blue[200], 0.30),
            '&:hover': {
                backgroundColor: blue[500],
                color: theme.palette.getContrastText(blue[500]),
            },
        },
    }))(Button);

    // if currentWeather is an empty object return null
    if(JSON.stringify(currentWeather) === JSON.stringify({})){
        return null;
    }
    return (
        <Card className={classes.root}>
            <CardHeader title="Raspberry Sky" className={classes.header} />
            <Divider variant="middle" />
            <CardContent>
                <Typography variant="h2" align="center">
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
                        wind {(currentWeather.WIND_SPEED).toFixed(1)} mph
                    </Typography>
                    <Typography>
                        gust {(currentWeather.WIND_GUST_SPEED).toFixed(1)} mph
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
                    
                </div>
            </CardContent>
            <Divider variant="middle" />
            <Typography align="center">
                {new Date(currentWeather.CREATED).toLocaleString()}
            </Typography>
            <CardActions className={classes.action}>
                <ColorButton 
                    color="primary"
                    size="small" 
                    className={classes.button}
                    onClick={async () => getCurrentWeather()}
                >
                    Reload
                </ColorButton>
            </CardActions>
        </Card>
    );
}

export default CurrentWeatherCard;