import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        // width: 600,
        margin: '0px 0px',
        padding: '0px',
    },
    chart: {
        padding: '10px 0px',
        margin: '15px auto',
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        width: 450,
        "& svg": {
            padding: 10,
        }
    },
}));