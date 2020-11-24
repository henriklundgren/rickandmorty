import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontSize: 15,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          overflowY: 'scroll',
        },
      },
    },
  },
  props: {
    MuiAppBar: {
      position: 'static',
      elevation: 0,
      color: 'transparent',
    },
    MuiToolbar: {
      variant: 'dense',
    },
    MuiButtonBase: {
      // disableFocusRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
});

export default theme;
