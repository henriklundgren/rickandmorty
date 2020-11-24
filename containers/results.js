import React from 'react';
import lunr from 'lunr';
import {useRouter} from 'next/router';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout';
import ResultsList from '../components/results';
import useStyles from './results.styles.js';

// the indexed store
let idx;

function Results({results}) {
  const classes = useStyles();
  const router = useRouter();
  const [store, setStore] = React.useState([]);

  const pages = Math.ceil(store.length / 5);
  const page = Number(router.query.page);
  const q = router.query.q;
  const start = page * 5 - 5;
  const end = page * 5;
  const items = store.slice(start, end).map(({ref}) => {
    return results.find(({id}) => id === Number(ref));
  });

  // create the index store (from all results)
  React.useEffect(() => {
    idx = lunr(function createIndex() {
      this.ref('id');
      this.field('name');

      results.forEach((res) => {
        this.add(res);
      });
    });
  }, [results.length]);

  // create the state store from the results of the search
  React.useEffect(() => {
    if (!q || !idx) {
      return;
    }

    const result = idx.search(q);
    setStore(result);
  }, [router.query.q]);

  if (!Object.keys(router.query).length) {
    return null;
  }

  return (
      <Container
        className={classes.container}
        maxWidth={false}
      >
        <ResultsList
          results={items}
          page={page}
          pages={pages}
          onChange={(_evt, page) => {
            return router.push({
              query: {
                ...router.query,
                page,
              }
            });
          }}
        />
      </Container>
  );
  return (
    <Layout
      initialSearchValue={q}
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
      <Container
        className={classes.container}
        maxWidth={false}
      >
        <ResultsList
          results={items}
          page={page}
          pages={pages}
          onChange={(_evt, page) => {
            return router.push({
              query: {
                ...router.query,
                page,
              }
            });
          }}
        />
      </Container>
    </Layout>
  );
}

export default Results;
