import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    select: {
        display: 'block',
        margin: '5px auto',
        padding: '10px 0px 0px',
        fontFamily: 'Montserrat',
        fontSize: 18,
        border: 'none',
        borderRadius: 3,
        background: 'transparent',//'rgba(255,255,255,0.6)',
        color: 'white',
        outline: 'none',
        textAlignLast: 'center',
    },
    option: {
        background: 'rgba(0,0,0,0.7)',
    }
}));