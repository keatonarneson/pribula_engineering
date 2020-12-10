import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#3066BE';
const white = '#FFFFFF';
const grey = '#A2A79E';
const red = '#7C0A02';

export default createMuiTheme({
  palette: {
    background: {
      default: '#f5f6f7',
    },
    common: {
      red: `${red}`,
      blue: `${blue}`,
      orange: `${white}`,
      grey: `${grey}`,
    },
    primary: {
      main: `${red}`,
    },
    secondary: {
      main: `${white}`,
    },
  },
  typography: {
    tab: {
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: '5rem',
      color: 'white',
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 900,
      fontSize: '2rem',
      color: 'white',
      // WebkitTextStrokeWidth: '2px',
      // WebkitTextStrokeColor: 'yellow',
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: '1.5rem',
      color: 'white',
      fontWeight: '700',
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: '500',
    },
    subtitle2: {
      // color: 'white',
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.25rem',
      color: 'white',
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: grey,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: blue,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        // color: grey,
        // fontWeight: 300,
      },
      // underline: {
      //   '&:before': {
      //     borderBottom: `2px solid ${blue}`,
      //   },
      //   '&:hover:not($disabled):not($focused):not($error):before': {
      //     borderBottom: `2px solid ${blue}`,
      //   },
      // },
    },
  },
});
