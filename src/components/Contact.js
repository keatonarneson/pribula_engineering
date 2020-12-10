import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
  titleBar: {
    backgroundColor: theme.palette.common.red,
    width: '100%',
    textAlign: 'center',
    padding: '1rem',
  },
  grey: {
    backgroundColor: 'grey',
  },
  orange: {
    padding: theme.spacing(2),
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  yellow: {
    padding: theme.spacing(2),
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  brown: {
    padding: theme.spacing(2),
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  message: {
    marginTop: '1em',
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
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }

        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    // axios
    //   .get(
    //     'https://us-central1-material-ui-course-3bb63.cloudfunctions.net/sendMail'
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  //*********************************************************************************************************** */

  return (
    <React.Fragment>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.titleBar}>
          <Typography color="secondary" variant="h3">
            Contact Us
          </Typography>
        </Grid>

        <Container>
          <Grid container justify="center">
            <Grid item container direction="column" style={{ width: '30em' }}>
              <Grid item>
                <Typography paragraph variant="body1" className={classes.intro}>
                  If you are interested in learning about our civil engineering
                  or land surveying services please contact us using the form
                  below or call us at (701) 772-7058.
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  variant="outlined"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  variant="outlined"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  className={classes.message}
                  multiline
                  fullWidth
                  rows={10}
                  variant="outlined"
                  placeholder="Type your question or comment..."
                  id="message"
                  onChange={event => setMessage(event.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                justify="center"
                style={{ marginTop: '2em' }}
              >
                <Grid item>
                  <Button
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      emailHelper.length !== 0 ||
                      email.length === 0
                    }
                    color="primary"
                    variant="contained"
                    className={classes.sendButton}
                    onClick={() => setOpen(true)}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Dialog
            style={{ zIndex: 1302 }}
            open={open}
            fullScreen={matchesXS}
            onChange={() => setOpen(false)}
            PaperProps={{
              style: {
                paddingTop: matchesXS ? '1em' : '5em',
                paddingBottom: matchesXS ? '1em' : '5em',
                paddingLeft: matchesXS
                  ? 0
                  : matchesSM
                  ? '5em'
                  : matchesMD
                  ? '10em'
                  : '10em',
                paddingRight: matchesXS
                  ? 0
                  : matchesSM
                  ? '5em'
                  : matchesMD
                  ? '10em'
                  : '10em',
              },
            }}
          >
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    color="primary"
                    align="center"
                    variant="h4"
                    gutterBottom
                  >
                    Confirm Message
                  </Typography>
                </Grid>
                <Grid item style={{ marginBottom: '0.5em' }}>
                  <TextField
                    label="Name"
                    id="name"
                    fullWidth
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: '0.5em' }}>
                  <TextField
                    label="Email"
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    id="email"
                    fullWidth
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              <Grid item style={{ width: matchesXS ? '100%' : '20em' }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  className={classes.message}
                  multiline
                  fullWidth
                  rows={10}
                  id="message"
                  onChange={event => setMessage(event.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                // direction={matchesSM ? 'column' : 'row'}
                direction="column"
                style={{ marginTop: '2em' }}
                alignItems="center"
              >
                <Grid item>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      emailHelper.length !== 0 ||
                      email.length === 0
                    }
                    color="primary"
                    variant="contained"
                    onClick={onConfirm}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>

          <Grid container justify="space-between">
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              className={classes.brown}
              xs={12}
              sm={3}
            >
              <Grid item>
                <LocationOnIcon
                  fontSize="large"
                  color="primary"
                  className={classes.icon}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">Address</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">208 3RD AVE NW</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  EAST GRAND FORKS, MN 56721
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="column"
              alignItems="center"
              className={classes.orange}
              xs={12}
              sm={3}
            >
              <Grid item>
                <PhoneIcon
                  fontSize="large"
                  color="primary"
                  className={classes.icon}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">Phone</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">(701) 772-7058</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              className={classes.yellow}
              xs={12}
              sm={3}
            >
              <Grid item>
                <EmailIcon
                  fontSize="large"
                  color="primary"
                  className={classes.icon}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">Email</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  info@pribulaengineering.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Grid item container xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.4419545624196!2d-97.02713518375184!3d47.92783427372373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c68695a01560db%3A0x241ab49f389725ee!2sPribula%20Engineering-Surveying!5e0!3m2!1sen!2sus!4v1602097437083!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameborder="0"
            style={{ border: '0' }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="Google Maps"
          ></iframe>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
