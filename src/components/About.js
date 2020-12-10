import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import jerry from '../assets/jerry.jpg';
import nick from '../assets/nick.jpg';
import ben from '../assets/ben.jpg';

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
    // maxWidth: '300px',
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
  bio: {
    color: 'black',
    textAlign: 'center',
  },
  button: {
    marginTop: '1em',
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.titleBar}>
        <Typography color="secondary" variant="h3">
          About
        </Typography>
      </Grid>
      <Container>
        <Grid container justify="center">
          <Grid item container direction="column">
            <Grid item>
              <Typography paragraph variant="body1" className={classes.intro}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quae blanditiis at. Illo consectetur suscipit exercitationem,
                dolorum nesciunt laudantium architecto tenetur, ipsam tempore
                dolorem, distinctio sint repudiandae est fuga rem saepe? Ullam
                quis error mollitia consequuntur repudiandae eos quod autem
                deserunt, sint possimus? Sapiente blanditiis porro mollitia,
                perspiciatis quo at.
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" className={classes.services}>
            <Grid
              item
              container
              justify={matchesSM ? 'space-between' : 'center'}
            >
              <Grid item xs={12} md={3}>
                <Grid item container direction="column" alignItems="center">
                  <Grid item className={classes.imgWrapper}>
                    <img
                      alt="Jerry Pribula"
                      src={jerry}
                      xs={12}
                      sm={3}
                      width="100%"
                    />
                  </Grid>
                  <Grid item>
                    <Typography color="primary" variant="subtitle2">
                      Jerry Pribula - PE, PLS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.bio}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quisquam ipsam molestias ipsum vero deleniti veniam animi
                      saepe unde obcaecati ullam.
                    </Typography>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      startIcon={<EmailIcon />}
                      className={classes.button}
                    >
                      jerry@pribulaengineering.com
                    </Button>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      startIcon={<PhoneIcon />}
                      className={classes.button}
                      style={{ marginBottom: '1em' }}
                    >
                      (701) 555-5555
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid item container direction="column" alignItems="center">
                  <Grid item className={classes.imgWrapper}>
                    <img alt="Nick Pribula" src={nick} width="100%" />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" color="primary">
                      Nick Pribula - PE, PLS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" className={classes.bio}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quisquam ipsam molestias ipsum vero deleniti veniam animi
                      saepe unde obcaecati ullam.
                    </Typography>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      startIcon={<EmailIcon />}
                      className={classes.button}
                    >
                      nick@pribulaengineering.com
                    </Button>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      startIcon={<PhoneIcon />}
                      className={classes.button}
                      style={{ marginBottom: '1em' }}
                    >
                      (701) 555-5555
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid item container direction="column" alignItems="center">
                  <Grid item className={classes.imgWrapper}>
                    <img
                      alt="Ben Pribula"
                      src={ben}
                      xs={12}
                      sm={3}
                      width="100%"
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" color="primary">
                      Ben Pribula - PE, FS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.bio}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quisquam ipsam molestias ipsum vero deleniti veniam animi
                      saepe unde obcaecati ullam.
                    </Typography>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      startIcon={<EmailIcon />}
                      className={classes.button}
                    >
                      ben@pribulaengineering.com
                    </Button>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      startIcon={<PhoneIcon />}
                      className={classes.button}
                      style={{ marginBottom: '1em' }}
                    >
                      (701) 555-5555
                    </Button>
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
