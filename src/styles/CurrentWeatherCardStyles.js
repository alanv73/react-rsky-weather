import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    borderRadius: 12,
    width: 525,
    height: 300,
    textAlign: 'center',
    margin: '30px auto',
    overflow: 'auto',
    background: 'rgba(0,0,0, 0.6)',
    color: 'white',
  },
  divider: {
    background: 'white',
  },
  header: {
    textAlign: 'center',
    spacing: 10,
    // paddingBottom: 8,
  },
  content: {
    padding: '24px 24px',
  },
  temp: {
      float: 'left',
      marginLeft: 20,
      fontWeight: '400',
  },
  list: {
    // background: 'rgba(196,196,196, 0.3)',
    // borderRadius: theme.spacing(2),
    padding: '0px 0px',
    paddingLeft: 20,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: '6rem',
    overflow: 'auto',
    "& p": {
        // flexBasis: '40%',
        // background: 'rgba(196,196,196, 0.3)',
        // borderRadius: theme.spacing(2),
        // borderBottom: '1px solid black',
        padding: '0px 10px',
        // marginBottom: 5,

    }
  },
  wind: {
    position: 'absolute',
    left: '35%',
    top: '14%',
    width: 140,
    height: 70,
  },
  gust: {
    // fontFamily: 'Montserrat',
    // color: '#fff',
    opacity: 0.87,
    fontWeight: 500,
    fontSize: 12,
    position: 'absolute',
    bottom: -15,
    left: '25%',
  },
  arrow: {
    width: 35,
    height: 50,
    position: 'absolute',
    left: 'calc(50% - 17px)',
    top: 'calc(50% - 22px)',
  },
  button: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    borderRadius: theme.spacing(2),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
