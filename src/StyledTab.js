import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab {...props} />);

export default StyledTab;