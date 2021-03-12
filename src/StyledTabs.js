import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

const StyledTabs = withStyles({
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

export default StyledTabs;