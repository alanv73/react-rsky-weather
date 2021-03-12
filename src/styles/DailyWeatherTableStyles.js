import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        // width: 600,
        margin: '15px 0px',
        
    },
    tableWrapper: {
        width: 450,
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        padding: 12.5,
        margin: '20px 0px 10px'

    },
    table: {
        fontFamily: 'Montserrat',
        height: '250px',
        width: '50%',
        overflowY: 'scroll',
        margin: '10px auto 10px',
        color: 'white',
    },
}));