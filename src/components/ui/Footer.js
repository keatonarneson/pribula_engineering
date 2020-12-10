import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import straw from '../../assets/straw_black.jpg';
import rebar from '../../assets/rebar_huge_darkened.jpg';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'relative',
    backgroundImage: `url(${rebar})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
  },

  mainCoentainer: {
    // backgroundColor: theme.palette.common.blue,

    position: 'absolute',
  },
  link: {
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  infoContainer: {
    padding: '3em',
    textAlign: 'left',
    backgroundColor: 'rgba(124, 10, 2, 0.7)',
  },
  icon: {
    marginRight: '1rem',
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.infoContainer}>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Grid item container alignItems="center">
                  <LocationOnIcon color="secondary" className={classes.icon} />
                  <div>
                    <Typography color="secondary" variant="subtitle1">
                      208 3RD AVE NW
                    </Typography>
                    <Typography color="secondary" variant="subtitle1">
                      East Grand Forks, MN 56721
                    </Typography>
                  </div>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container>
                  <PhoneIcon color="secondary" className={classes.icon} />
                  <Typography color="secondary" variant="subtitle1">
                    (701) 772-7058
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container>
                  <EmailIcon color="secondary" className={classes.icon} />
                  <Typography color="secondary" variant="subtitle1">
                    info@pribulaengineering.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => props.setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/services/civil-engineering"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Civil Engineering
              </Grid>
              <Grid
                item
                component={Link}
                to="/services/land-surveying"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Land Surveying
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/projects"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Projects
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                About Us
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
                onClick={() => props.setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  );
}
