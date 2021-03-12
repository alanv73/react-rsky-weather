import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

export const StyledTabs = withStyles({
  root: {
    minHeight: 0,
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: '50%',
      width: '100%',
      backgroundColor: '#FFEB3B',
    },
  },
})((props) => 
    <Tabs 
        {...props} 
        TabIndicatorProps={{ children: <span /> }}
    />
);

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    minHeight: 0,
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab {...props} />);