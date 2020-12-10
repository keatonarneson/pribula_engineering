import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import civil3d from '../assets/drafting.jpg';
import survey from '../assets/survey.jpg';

const useStyles = makeStyles(theme => ({
  titleBar: {
    backgroundColor: theme.palette.common.red,
    width: '100%',
    textAlign: 'center',
    padding: '1rem',
  },
  intro: {
    color: 'black',
    marginTop: '1.5em',
    textAlign: 'center',
    marginBottom: '1.5em',
  },
  imgWrapper: {
    maxWidth: '600px',
  },
  services: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.common.red,
    fontWeight: '500',
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.titleBar}>
        <Typography color="secondary" variant="h3">
          Services
        </Typography>
      </Grid>
      <Container>
        <Grid container justify="center">
          <Grid item container direction="column" style={{ width: '30em' }}>
            <Grid item>
              <Typography paragraph variant="body1" className={classes.intro}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam ipsam molestias ipsum vero deleniti veniam animi saepe
                unde obcaecati ullam.
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" className={classes.services}>
            <Grid
              item
              container
              justify={matchesLG ? 'space-between' : 'center'}
            >
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
                  <Grid
                    item
                    style={matchesLG ? null : { marginBottom: '3rem' }}
                  >
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
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
