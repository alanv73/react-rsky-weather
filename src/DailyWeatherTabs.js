import React, { useEffect, useState, useContext } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import AppBar from '@material-ui/core/AppBar';
import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import {grey, amber, yellow} from '@material-ui/core/colors';
import TabPanel from './TabPanel';
import FieldDropDown from './FieldDropDown';
import DailyWeatherChart from './DailyWeatherChart';
import DailyWeatherTable from './DailyWeatherTable';
import { DailyContext } from './contexts/weatherContext';
import { DAILY_FIELDS } from './constants';
import useStyles from './styles/DailyWeatherTabsStyles';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const muiTheme = createMuiTheme({
    palette: createPalette({
        primary: yellow,
        accent: amber,
        error: grey,
        type: 'dark'
    }),
});

const DailyWeatherTabs = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const {
        currentDate, 
        getDailyDataState, 
        getDayChartData,
        dChartField,
        handleDayChartChange
    } = useContext(DailyContext);

    useEffect(() => {
        async function getSummary() {
            await getDailyDataState(currentDate);
        }
        getSummary();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDate]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const domainData = getDayChartData(dChartField);

    return (
        <MuiThemeProvider theme={muiTheme}>
            <div className={classes.root}>
                <FieldDropDown 
                    field={dChartField} 
                    onChange={handleDayChartChange} 
                    data={DAILY_FIELDS}
                />
                <AppBar position="static" color="transparent">
                    <StyledTabs
                        classes={{ tabs: classes.tabs }}
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="chart and table tabbed container"
                    >
                        <StyledTab className={classes.tab} label="Chart" {...a11yProps(0)} />
                        <StyledTab className={classes.tab} label="Table" {...a11yProps(1)} />
                    </StyledTabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <DailyWeatherChart chartData={domainData} />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <DailyWeatherTable title={dChartField} headings={['Time', 'Value']} tableData={domainData} />
                    </TabPanel>
                </SwipeableViews>
            </div>
        </MuiThemeProvider>
    );
}

export default DailyWeatherTabs;