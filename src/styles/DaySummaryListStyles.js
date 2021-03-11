import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints }) => ({
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
