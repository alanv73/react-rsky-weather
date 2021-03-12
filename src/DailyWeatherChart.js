import React, { useEffect, useContext } from 'react';
import { DailyContext } from './contexts/weatherContext';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import useStyles from './styles/DailyWeatherChartStyles';

function DailyWeatherChart() {
    const classes = useStyles();
    const {
        currentDate, 
        getDailyDataState, 
        getDayChartData,
        dChartField,
    } = useContext(DailyContext);

    useEffect(() => {
        async function getSummary() {
            await getDailyDataState(currentDate);
        }
        getSummary();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDate]);

    const renderLineChart = (
        <LineChart width={450} height={280} data={getDayChartData(dChartField)}>
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
                {renderLineChart}
            </div>
        </div>
    )
}

export default DailyWeatherChart;
