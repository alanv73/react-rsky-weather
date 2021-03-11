import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
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
        color: 'black',
    },
    content: {
        padding: '5px 10px',
        textAlign: 'center',
    }
}));