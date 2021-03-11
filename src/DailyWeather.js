import React, { useEffect, useContext } from 'react';
import { DailyContext } from './contexts/weatherContext';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { makeStyles } from '@material-ui/core';
import TwoColTable from './TwoColTable';
import FieldDropDown from './FieldDropDown';
import { DAILY_FIELDS } from './constants';

const useStyles = makeStyles(theme => ({
    root: {
        // width: 600,
        margin: '30px 30px',
        
    },
    chart: {
        padding: '10px 0px',
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        width: 525,
        // margin: '0px 20px',
        "& select": {
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
        },
        "& svg": {
            padding: 10,
        }
    },
    tableWrapper: {
        width: 500,
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        padding: 12.5,
        margin: '20px 0px'

    },
    table: {
        fontFamily: 'Montserrat',
        height: '250px',
        width: '50%',
        overflowY: 'scroll',
        margin: '20px auto',
        color: 'white',
    },
}));

function DailyWeather() {
    const classes = useStyles();
    const {
        dailyData,
        currentDate, 
        setCurrentDate, 
        getDailyDataState, 
        getDailyParamArray, 
        getMinParam, 
        getMaxParam,
        getDayChartData,
        dChartField,
        handleDayChartChange
    } = useContext(DailyContext);

    useEffect(() => {
        async function getSummary() {
            await getDailyDataState(currentDate);
        }
        getSummary();
    }, [currentDate]);

    const renderLineChart = (
        <LineChart width={500} height={300} data={getDayChartData(dChartField)}>
            <Line 
                type="monotone" 
                dot={false} 
                dataKey="param" 
                stroke="red"
            />
            <CartesianGrid stroke="#eeeeee" />
            <XAxis stroke="#eeeeee" height={20} tick={{fontSize: 12, fill: '#eeeeee'}} dataKey="name" />
            <YAxis stroke="#eeeeee" width={35} tick={{fill: '#eeeeee'}} />
        </LineChart>
    );


    return (
        <div className={classes.root}>
            <div className={classes.chart}>
                <FieldDropDown 
                    field={dChartField} 
                    onChange={handleDayChartChange} 
                    data={DAILY_FIELDS}
                />
                {renderLineChart}
            </div>
            <div className={classes.tableWrapper}>
                <div className={classes.table} >
                    <TwoColTable 
                        title={dChartField} 
                        colHeading1="Time" 
                        colHeading2="Value"
                        data={getDayChartData(dChartField)}
                    />
                </div>
            </div>
        </div>
    )
}

export default DailyWeather;
