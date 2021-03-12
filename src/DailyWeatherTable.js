import React, { useEffect, useContext } from 'react';
import { DailyContext } from './contexts/weatherContext';
import TwoColTable from './TwoColTable';
import useStyles from './styles/DailyWeatherTableStyles';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDate]);

    return (
        <div className={classes.root}>
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
