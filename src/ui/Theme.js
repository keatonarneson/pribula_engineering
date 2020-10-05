import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#3066BE';
const arcOrange = '#FFBA60';
const grey = '#A2A79E';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${arcOrange}`,
      grey: `${grey}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      // fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: '4rem',
      color: 'white',
      // lineHeight: 1.5,
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
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '0.75rem',
    },
    subtitle2: {
      // color: 'white',
      fontSize: '0.75rem',
      // fontWeight: 300,
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
        color: grey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${blue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${blue}`,
        },
      },
    },
  },
});
