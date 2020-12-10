import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import drain from '../assets/drain.jpg';
import straw from '../assets/straw_black.jpg';
import paving from '../assets/paving.jpg';

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
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.titleBar}>
        <Typography color="secondary" variant="h3">
          Land Surveying
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
        </Grid>
        <Grid container direction="column" className={classes.services}>
          <Grid item container justify={matchesSM ? 'space-between' : 'center'}>
            <Grid item xs={12} md={3}>
              <Grid item container direction="column" alignItems="center">
                <Grid item className={classes.imgWrapper}>
                  <img
                    alt="Jerry Pribula"
                    src={'https://source.unsplash.com/random/1000x700/?water'}
                    xs={12}
                    sm={3}
                    width="100%"
                  />
                </Grid>
                <Grid item>
                  <Typography color="primary" variant="subtitle2">
                    Boundary-Topographic-Location Surveys
                  </Typography>
                </Grid>
                <Grid item>
                  <ul>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid item container direction="column" alignItems="center">
                <Grid item className={classes.imgWrapper}>
                  <img
                    alt="Nick Pribula"
                    src={
                      'https://source.unsplash.com/random/1000x700/?construction'
                    }
                    width="100%"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" color="primary">
                    Land Subdivisions
                  </Typography>
                </Grid>
                <Grid item>
                  <ul>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid item container direction="column" alignItems="center">
                <Grid item className={classes.imgWrapper}>
                  <img
                    alt="Ben Pribula"
                    src={'https://source.unsplash.com/random/1000x700/?soil'}
                    xs={12}
                    sm={3}
                    width="100%"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" color="primary">
                    Construction Staking
                  </Typography>
                </Grid>
                <Grid item>
                  <ul>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
