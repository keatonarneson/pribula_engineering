import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import ditch from '../assets/ditch_black.jpg';
import survey from '../assets/survey_blue.jpg';
import bk from '../assets/bk_blue.jpg';
import civil3d from '../assets/civil3d_black.jpg';
import drain from '../assets/drain.jpg';
import straw from '../assets/straw_black.jpg';
import paving from '../assets/paving.jpg';

const useStyles = makeStyles(theme => ({
  container: { position: 'relative' },
  grey: { backgroundColor: 'grey' },
  textBlock: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'black',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  headerBlock: {
    position: 'absolute',
    top: '0',
    left: '0',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // color: theme.palette.common.blue,
  },
  imgWrapper: {
    transition: '0.3s',
    '&:hover': {
      transform: 'translate(0, -10px)',
      cursor: 'pointer',
    },
  },
  fullWidth: {
    left: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    maxWidth: '99.8vw',
    position: 'relative',
    right: '50%',
    width: '100vw',
    opacity: '0.7',
  },
  darkBackground: {
    left: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    maxWidth: '99.6vw',
    position: 'relative',
    right: '50%',
    width: '100vw',
    backgroundColor: 'black',
  },

  secondaryWrapper: {
    // backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: '0.2rem',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: 'white',
    color: theme.palette.common.blue,
    fontFamily: 'Montserrat',
    fontWeight: '700',
  },
  fixedBackground: {
    position: 'relative',
    backgroundImage: `url(${straw})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    left: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    maxWidth: '99.8vw',
    right: '50%',
    width: '100vw',
    // opacity: '0.7',
    textAlign: 'center',
  },
  aboutUs: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  projects: {
    // position: 'relative',
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <React.Fragment>
      <Grid container className={classes.darkBackground}>
        <img alt="drain" src={drain} className={classes.fullWidth} />
        <div className={classes.headerBlock}>
          <Typography variant="h2">PRIBULA ENGINEERING, PLLC.</Typography>
          <div className={classes.secondaryWrapper}>
            <Typography variant="h3" className={classes.secondary}>
              Civil Engineering ∙ Land Surveying
            </Typography>
          </div>
          <Button
            variant="contained"
            disableElevation
            className={classes.button}
          >
            GET STARTED
          </Button>
        </div>
      </Grid>
      <Typography color="primary" variant="h3">
        What We Do
      </Typography>
      <Grid container>
        <Grid item className={classes.container}>
          <Grid item container className={classes.imgWrapper}>
            <img alt="alt" src={civil3d} width="308px" />
            <Typography className={classes.textBlock}>Design</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.container}>
          <Grid item container className={classes.imgWrapper}>
            <img alt="alt" src={survey} width="308px" />
            <Typography className={classes.textBlock}>
              Land Surveying
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.container}>
          <Grid item container className={classes.imgWrapper}>
            <img alt="alt" src={ditch} width="308px" />
            <Typography className={classes.textBlock}>
              Water Resources
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.container}>
          <Grid item container className={classes.imgWrapper}>
            <img alt="alt" src={bk} width="308px" />
            <Typography className={classes.textBlock}>
              Site Development
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.fixedBackground}>
        <Container className={classes.aboutUs}>
          <Typography variant="h3">Who We Are</Typography>
          <Typography paragraph variant="body1">
            Established in 1999, Pribula Engineering, PLLC. is a full service
            Civil Engineering and Land Surveying Company serving Northeastern
            North Dakota and Northwestern Minnesota. Established in 1999,
            Pribula Engineering, PLLC. is a full service Civil Engineering and
            Land Surveying Company serving Northeastern North Dakota and
            Northwestern Minnesota. Established in 1999, Pribula Engineering,
            PLLC. is a full service Civil Engineering and Land Surveying Company
            serving Northeastern North Dakota and Northwestern Minnesota.
          </Typography>
          <Button
            variant="contained"
            disableElevation
            className={classes.button}
          >
            ABOUT US
          </Button>
        </Container>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.projects}
      >
        <Grid item>
          <Typography gutterBottom color="primary" variant="h3">
            Projects
          </Typography>
        </Grid>
        <Grid item className={classes.imgWrapper}>
          <img alt="alt" src={paving} width="1232px" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
