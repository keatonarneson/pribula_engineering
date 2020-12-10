import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import ditch from '../assets/ditch_black.jpg';
import survey from '../assets/survey.jpg';
import bk from '../assets/bk_blue.jpg';
import civil3d from '../assets/drafting.jpg';
import drain from '../assets/drain.jpg';
import straw from '../assets/straw_black.jpg';
import paving from '../assets/paving.jpg';
import rebar from '../assets/rebar_huge_darkened.jpg';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const useStyles = makeStyles(theme => ({
  headerBlock: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
  },
  imgWrapper: {
    // transition: '0.3s',
    // '&:hover': {
    //   transform: 'translate(0, -10px)',
    //   cursor: 'pointer',
    //},
    maxWidth: '600px',
  },

  darkBackground: {
    backgroundImage: `url(${drain})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '100vh',
  },

  secondaryWrapper: {
    // backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: '0.2rem',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: 'white',
    color: theme.palette.common.red,
    fontFamily: 'Montserrat',
    fontWeight: '700',
  },
  fixedBackground: {
    position: 'relative',
    backgroundImage: `url(${rebar})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundAttachment: 'scroll',
    },
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
  services: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    width: '100%',
  },
  h2: {
    ...theme.typography.h2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  h4: {
    ...theme.typography.h4,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  body1: {
    ...theme.typography.body1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.common.red,
    fontWeight: '500',
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <React.Fragment>
      <Grid container xs={12} wrap="wrap" className={classes.darkBackground}>
        <div className={classes.headerBlock}>
          <Typography variant="h2" className={classes.h2}>
            PRIBULA ENGINEERING, PLLC.
          </Typography>
          <div className={classes.secondaryWrapper}>
            <Typography variant="h4" className={classes.h4}>
              Civil Engineering ∙ Land Surveying
            </Typography>
          </div>
          <Button
            variant="contained"
            disableElevation
            component={Link}
            to="/contact"
            onClick={() => props.setValue(4)}
            className={classes.button}
          >
            GET STARTED
          </Button>
        </div>
      </Grid>

      <Grid container direction="column" className={classes.services}>
        <Container>
          <Grid item container justify="center">
            <Typography gutterBottom color="primary" variant="h3">
              What We Do
            </Typography>
          </Grid>
          <Grid item container justify={matchesLG ? 'space-between' : 'center'}>
            <Grid item>
              <Grid item container direction="column" alignItems="center">
                <Grid
                  item
                  className={classes.imgWrapper}
                  component={Link}
                  to="/services/civil-engineering"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                  }}
                >
                  <img
                    alt="civil-3d"
                    src={civil3d}
                    xs={12}
                    sm={6}
                    width="100%"
                  />
                </Grid>
                <Grid item style={matchesLG ? null : { marginBottom: '3rem' }}>
                  <Typography
                    color="primary"
                    component={Link}
                    to="/services/civil-engineering"
                    onClick={() => {
                      props.setValue(1);
                      props.setSelectedIndex(2);
                    }}
                    className={classes.link}
                  >
                    Civil Engineering
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container direction="column" alignItems="center">
                <Grid
                  item
                  className={classes.imgWrapper}
                  component={Link}
                  to="/services/land-surveying"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(2);
                  }}
                >
                  <img
                    alt="surveyor"
                    src={survey}
                    xs={12}
                    sm={6}
                    width="100%"
                  />
                </Grid>
                <Grid item>
                  <Typography
                    color="primary"
                    component={Link}
                    to="/services/land-surveying"
                    onClick={() => {
                      props.setValue(1);
                      props.setSelectedIndex(2);
                    }}
                    className={classes.link}
                  >
                    Land Surveying
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid container xs={12} className={classes.fixedBackground}>
        <Container className={classes.aboutUs}>
          <Typography
            color="primary"
            variant="h3"
            style={{ WebkitTextStroke: '1px black' }}
          >
            Who We Are
          </Typography>
          <Typography paragraph variant="body1" className={classes.body1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            architecto perferendis mollitia odit possimus voluptates ea quod
            deserunt pariatur ipsa unde adipisci, iusto suscipit accusamus autem
            hic recusandae nostrum. Delectus sint voluptas rerum amet, in iste
            quos. Placeat dolorum quisquam velit esse iure expedita vero ad
            officiis vitae! Error, vitae?
          </Typography>
          <Button
            variant="contained"
            disableElevation
            component={Link}
            to="/about"
            onClick={() => props.setValue(5)}
            className={classes.button}
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
        xs={12}
        className={classes.projects}
      >
        <Grid item>
          <Typography gutterBottom color="primary" variant="h3">
            Projects
          </Typography>
        </Grid>
        <Grid item>
          {/* <img alt="alt" src={paving} width="1232px" /> */}
          <ImageGallery items={images} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
