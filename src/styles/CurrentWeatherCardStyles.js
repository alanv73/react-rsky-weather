import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    borderRadius: 12,
    width: '95%',//525,
    maxWidth: 525,
    minWidth: 490,
    // height: 300,
    textAlign: 'center',
    margin: '30px auto 15px',
    // margin: '30px 00px 15px',//'30px 30px 15px',
    overflow: 'auto',
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  temp: {
      float: 'left',
      marginLeft: 20,
      fontWeight: '400',
      margin: 'auto 0',
  },
  list: {
    padding: '0px 0px',
    paddingLeft: 20,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    "& p": {
        padding: '0px 10px',
    }
  },
  wind: {
    width: 140,
    height: 70,
    alignSelf: 'center',
  },
  gust: {
    opacity: 0.87,
    fontWeight: 500,
    fontSize: 12,
    textAlign: 'center',
  },
  arrow: {
    width: 35,
    height: 50,
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
