import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints }) => ({
    root: {
        width: 300,
        // height: 400,
        overflowY: 'auto',
        [breakpoints.up('lg')]: {
            justifyContent: 'center',
        },
        marginRight: '50px',
        marginLeft: '30px',
        margin: '14px auto',
        marginBottom: 70,
    },
}));
