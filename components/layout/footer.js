import Link from 'next/link';
import MuiLink from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function Footer() {
  return (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Container>
            <Link
              href={{
                pathname: '/products',
                query: {
                  page: 1,
                },
              }}
              passHref
            >
              <MuiLink>
                All
              </MuiLink>
            </Link>
            <Typography>
              Data provided by <MuiLink href="https://rickandmortyapi.com/">rickandmortyapi.com</MuiLink>.
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Footer;

