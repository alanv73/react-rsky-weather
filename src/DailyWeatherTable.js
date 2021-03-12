import React from 'react';
import TwoColTable from './TwoColTable';
import useStyles from './styles/DailyWeatherTableStyles';

function DailyWeatherTable({title, headings, tableData}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.tableWrapper}>
                <div className={classes.table} >
                    <TwoColTable 
                        title={title} 
                        colHeading1={headings[0]} 
                        colHeading2={headings[1]}
                        data={tableData}
                    />
                </div>
            </div>
        </div>
    )
}

export default DailyWeatherTable;
