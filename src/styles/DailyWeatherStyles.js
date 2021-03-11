import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        // width: 600,
        margin: '15px 30px',
        
    },
    chart: {
        padding: '10px 0px',
        margin: '15px 0px',
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        width: 525,
        // margin: '0px 20px',
        "& select": {
            display: 'block',
            margin: '5px auto',
            fontFamily: 'Montserrat',
            fontSize: 18,
            border: 'none',
            borderRadius: 3,
            background: 'transparent',//'rgba(255,255,255,0.6)',
            color: 'white',
            outline: 'none',
        },
        "& option": {
            background: 'rgba(0,0,0,0.7)',
        },
        "& svg": {
            padding: 10,
        }
    },
    tableWrapper: {
        width: 500,
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        padding: 12.5,
        margin: '30px 0px'

    },
    table: {
        fontFamily: 'Montserrat',
        height: '250px',
        width: '50%',
        overflowY: 'scroll',
        margin: '20px auto',
        color: 'white',
    },
}));