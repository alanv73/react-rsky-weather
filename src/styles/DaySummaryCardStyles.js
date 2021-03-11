import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export default makeStyles(() => ({
  actionArea: {
    // maxWidth: 280,
    // width: 250,
    // minWidth: 215,
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    maxWidth: 280,
    width: 260,
    minWidth: 215,
    // width: 250,
    borderRadius: 16,
    background: color,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  topContent: ({ color }) => {
    return {
      backgroundColor: 'transparent',
      padding: '1rem 1.5rem 0.5rem 1.5rem',
    };
  },
  bottomContent: ({ color }) => {
    return {
      backgroundColor: 'transparent',
      padding: '0.5rem 1.5rem 1.5rem 1.5rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    };
  },
  maxTemp: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  minTemp: {
    fontFamily: 'Keania One',
    fontSize: '1.4rem',
    color: '#a0a0a0',
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    background: 'rgba(255,255,255, 0.5)',
    borderRadius: 20,
    padding: '5px 10px',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    // marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
  cardData: {
    // float: 'left',
  },
  wind: {
    alignSelf: 'center',
  },
  gust: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    fontWeight: 500,
    fontSize: 9,
    textAlign: 'center',
  },
  arrow: {
    width: 35,
    height: 50,
    margin: '0 auto',
  },
}));
