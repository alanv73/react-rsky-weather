import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginLeft: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        color: 'white',
        width: 525,
    },
    select: {
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
}));