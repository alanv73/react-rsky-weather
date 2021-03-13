import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints }) => ({
    root: {
        minWidth: 280,
        maxWidth: 320,
        width: '80%',
        overflowY: 'auto',
        [breakpoints.up('lg')]: {
            justifyContent: 'center',
        },
        margin: '14px auto',
        marginBottom: 70,
    },
}));
