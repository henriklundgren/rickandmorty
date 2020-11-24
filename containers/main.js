import React from 'react';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import useStyles from './main.styles.js';

function Main(_props) {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {/* promotion component */}
      <div />
    </Container>
  );
}

export default Main;

