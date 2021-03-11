import React, { useEffect, useContext } from 'react';
import { DailyContext } from './contexts/weatherContext';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import TwoColTable from './TwoColTable';
import FieldDropDown from './FieldDropDown';
import { DAILY_FIELDS } from './constants';
import useStyles from './styles/DailyWeatherStyles';

function DailyWeather() {
    const classes = useStyles();
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
    }, [currentDate]);

    const renderLineChart = (
        <LineChart width={500} height={300} data={getDayChartData(dChartField)}>
            <Line 
                type="monotone" 
                dot={false} 
                dataKey="param" 
                stroke="red"
                strokeWidth={3}
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
