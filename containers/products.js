import React from 'react';
import {useRouter} from 'next/router';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout';
import ResultsList from '../components/results';

function Products({results}) {
  const router = useRouter();
  const page = Number(router.query.page);
  const q = router.query.q;
  const limit = 6 * 4;
  const start = page * limit - limit;
  const end = page * limit;
  const pages = Math.ceil(results.length / limit);

  return (
    <Layout
      initialSearchValue=""
      onSearch={(query) => {
        return router.push({
          pathname: '/rickandmorty/search',
          query: {
            q: query,
            page: 1,
          }
        });
      }}
    >
      <Container maxWidth={false}>
        <ResultsList
          results={results.slice(start, end)}
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

export default Products;

