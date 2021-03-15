import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    borderRadius: 12,
    width: '90%',
    // maxWidth: 525,
    minWidth: 350,
    textAlign: 'center',
    margin: '30px auto 15px',
    // overflow: 'auto',
    background: 'rgba(0,0,0, 0.6)',
    color: 'white',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    height: '40px',
    alignSelf: 'center',
  },
  divider: {
    background: 'white',
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  content: {
    padding: '12px 24px',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  temp: {
    fontWeight: '400',
    alignSelf: 'center',
  },
  list: {
    padding: '0px 0px',
    // paddingLeft: 30,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexBasis: '110px',
    "& p": {
      fontSize: 15,
      padding: '0px 10px',
      textAlign: 'center',
      minWidth: '110px',
    }
  },
  wind: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  gust: {
    opacity: 0.87,
    fontWeight: 500,
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
  },
  arrow: {
    width: 35,
    height: 50,
    alignSelf: 'center',
  },
  date: {
    margin: '5px 0px',
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
