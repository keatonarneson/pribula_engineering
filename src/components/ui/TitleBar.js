import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  titleBar: {
    backgroundColor: theme.palette.common.red,
    width: '100%',
    textAlign: 'center',
    padding: '1rem',
  },
}));

export default function Contact(props) {
  const classes = useStyles();

  const { title } = props;

  return (
    <Grid item className={classes.titleBar}>
      <Typography color="secondary" variant="h3">
        {title}
      </Typography>
    </Grid>
  );
}
