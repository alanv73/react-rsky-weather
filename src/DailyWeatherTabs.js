import React, { useState, useContext } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {grey, amber, red} from '@material-ui/core/colors';
import TabPanel from './TabPanel';
import FieldDropDown from './FieldDropDown';
import DailyWeatherChart from './DailyWeatherChart';
import DailyWeatherTable from './DailyWeatherTable';
import { DailyContext } from './contexts/weatherContext';
import { DAILY_FIELDS } from './constants';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const muiTheme = createMuiTheme({
    palette: createPalette({
        primary: red,
        accent: amber,
        error: grey,
        type: 'dark'
    }),
});

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        color: 'white',
        width: 525,
    },
    select: {
        display: 'block',
        margin: '5px auto',
        fontFamily: 'Montserrat',
        fontSize: 18,
        border: 'none',
        borderRadius: 3,
        background: 'transparent',//'rgba(255,255,255,0.6)',
        color: 'white',
        outline: 'none',
    },
    "& option": {
        background: 'rgba(0,0,0,0.7)',
    }
}));

const DailyWeatherTabs = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const {
        dChartField,
        handleDayChartChange
    } = useContext(DailyContext);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    const handleChangeIndex = (index) => {
    setValue(index);
    };

    return (
        <MuiThemeProvider theme={muiTheme}>
            <div className={classes.root}>
                <FieldDropDown 
                    field={dChartField} 
                    onChange={handleDayChartChange} 
                    data={DAILY_FIELDS}
                />
                <AppBar position="static" color="transparent">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    >
                        <Tab className={classes.tab} label="Chart" {...a11yProps(0)} />
                        <Tab className={classes.tab} label="Table" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <DailyWeatherChart />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <DailyWeatherTable />
                    </TabPanel>
                </SwipeableViews>
            </div>
        </MuiThemeProvider>
    );
}

export default DailyWeatherTabs;