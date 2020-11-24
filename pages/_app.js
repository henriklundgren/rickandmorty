import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme.js';
import Layout from '../components/layout';

const title = 'Rick and Morty';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const router = useRouter();
  const [value, setSearch] = React.useState('');
  const {q} = router.query;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    if (!router.query.hasOwnProperty('q')) {
      setSearch('');
    } else {
      setSearch(q);
    }
  }, [q]);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout
          title={title}
          onChange={setSearch}
          value={value}
          initialSearchValue={q || ""}
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
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

