import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export default makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    maxWidth: 300,
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
  wind: {
    position: 'absolute',
    left: '60%',
    top: '35%',
    // border: '2px solid white',
    // borderRadius: 50,
    width: 70,
    height: 70,
  },
  gust: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    fontWeight: 500,
    fontSize: 9,
    position: 'absolute',
    bottom: -10,
    left: '25%',
  },
  arrow: {
    width: 35,
    height: 50,
    position: 'absolute',
    left: 'calc(50% - 17px)',
    top: 'calc(50% - 22px)',
  },
}));