import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto',
        width: '100%',
    },
    borders: {
        borderCollapse: 'collapse',
    },
    caption: {
        textAlign: 'center',
    },
    headings: {
        position: 'sticky',
        top: 0,
        background: '#DDD',
    },
    content: {
        padding: '5px 10px',
        textAlign: 'center',
    }
}));

function TwoColTable({
    title, 
    colHeading1, 
    colHeading2, 
    data
}) {
    const classes = useStyles();

    return (
        <table className={`${classes.root} ${classes.borders}`} >
            <caption className={classes.caption}>
                {
                    title.replace('_', ' ')
                        .split(' ')
                        .map(w => 
                            w[0] + w.substr(1).toLowerCase()
                        ).join(' ')
                }
            </caption>
            <thead>
                <tr className={classes.borders}>
                    <th className={`${classes.borders} ${classes.headings} ${classes.content}`}>
                        {colHeading1}
                    </th>
                    <th className={`${classes.borders} ${classes.headings} ${classes.content}`}>
                        {colHeading2}
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length > 0 && 
                    data.map(h => (
                        <tr key={h.name}>
                            <td className={classes.content}>
                                {h.name}
                            </td>
                            <td className={classes.content}>
                                {h.param}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TwoColTable;