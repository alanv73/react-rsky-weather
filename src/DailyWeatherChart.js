import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import useStyles from './styles/DailyWeatherChartStyles';

function DailyWeatherChart({chartData}) {
    const classes = useStyles();

    const renderLineChart = (
        <ResponsiveContainer width="95%" height={260}>
            <LineChart data={chartData}>
                <Line 
                    type="monotone" 
                    dot={false} 
                    dataKey="param" 
                    stroke="red"
                    strokeWidth={3}
                />
                <CartesianGrid stroke="#eeeeee" />
                <XAxis 
                    stroke="#eeeeee" 
                    height={30} 
                    tick={{fontSize: 12, fill: '#eeeeee'}} 
                    dataKey="name"
                />
                <YAxis 
                    stroke="#eeeeee" 
                    width={40} 
                    tick={{fill: '#eeeeee'}}
                />
            </LineChart>
        </ResponsiveContainer>
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
