import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DaySummaryCard from './DaySummaryCard';
import { DailySummaryContext } from './contexts/weatherContext';
import useGridStyles from './styles/DaySummaryListStyles';

export default function DaySummaryList() {
    const gridStyles = useGridStyles();
    const {
        dailySummary, 
        getDailySummary
    } = useContext(DailySummaryContext);

    useEffect(() => {
        async function getWeatherSummary() {
            let d = new Date();
            d.setDate(d.getDate() - 1);
            await getDailySummary(d, 5);
        }
        getWeatherSummary();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Grid 
                direction="column-reverse"
                classes={gridStyles} 
                container 
                spacing={4} 
                wrap={'nowrap'}
            >
            {
                dailySummary.length > 0 &&
                dailySummary.map(ds => (
                    <Grid item key={ds.CREATED}>
                        <DaySummaryCard
                            color={'rgba(0,0,0,0.6)'}
                            weather={ds}
                            title={'Dota 2'}
                            subtitle={'Be a Legend!'}
                            image={
                            'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png'
                            }
                        />
                    </Grid>
                ))
            }
            </Grid>
        </>
    )
}
