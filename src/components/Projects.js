import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TitleBar from '../components/ui/TitleBar';

const useStyles = makeStyles(theme => ({}));

export default function Contact(props) {
  const classes = useStyles();

  return <TitleBar title={'Projects'} />;
}
