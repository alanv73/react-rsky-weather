import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DaySummaryCard from './DaySummaryCard';
import { DailySummaryContext } from './contexts/weatherContext';

const useGridStyles = makeStyles(({ breakpoints }) => ({
    root: {
        width: 350,
        // height: 400,
        overflowY: 'auto',
        [breakpoints.up('lg')]: {
            justifyContent: 'center',
        },
        marginRight: '50px',
        margin: '14px 0px',
        marginBottom: 70
    },
}));



export default function DaySummaryList() {
    const gridStyles = useGridStyles();
    const {
        dailySummary, 
        getDailySummary
    } = useContext(DailySummaryContext);

    useEffect(() => {
        async function getWeatherSummary() {
            await getDailySummary(new Date(), 5);
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
