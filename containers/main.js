import React from 'react';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import useStyles from './main.styles.js';

function Main(_props) {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Layout
      initialSearchValue=""
      onSearch={(query) => {
        return router.push({
          pathname: '/search',
          query: {
            q: query,
            page: 1,
          }
        });
      }}
    >
      <Container className={classes.root}>
        {/* promotion component */}
        <div />
      </Container>
    </Layout>
  );
}

export default Main;

