import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        // width: 600,
        // margin: '0px 0px',
        // padding: '0px',
    },
    chart: {
        padding: '10px 0px',
        margin: '15px 0px',
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        width: 475,
        "& svg": {
            padding: 10,
        }
    },
}));