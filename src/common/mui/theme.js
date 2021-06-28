import { createMuiTheme } from '@material-ui/core/styles';
import black from '@material-ui/core/colors/black';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: black[500]
        },
        secondary: {
            main: green[500]
        }
    }
});

export default theme;
