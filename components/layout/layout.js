import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Footer from './footer.js';
import Header from './header.js';
import Search from './search.js';
import useStyles from './layout.styles.js';

function Layout({children, initialSearchValue, onSearch}) {
  const classes = useStyles();
  const [value, setSearch] = React.useState(undefined);
  const title = 'Rick and Morty';

  React.useEffect(() => {
    setSearch(initialSearchValue);
  }, []);

  if (value === undefined) {
    return null;
  }

  return (
    <Container
      className={classes.page}
      maxWidth={false}
      disableGutters
    >
      <Header
        title={title}
        searchComponent={
          <Search
            q={initialSearchValue}
            onChange={(_, value) => setSearch(value)}
            value={value}
            onDone={onSearch}
          />
        }
      />

      <Grid
        className={classes.main}
        container
        direction="column"
      >
        {children}
      </Grid>

      <Footer />
    </Container>
  );
}

export default Layout;

