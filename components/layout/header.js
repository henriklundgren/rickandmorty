import Link from 'next/link';
import MuiLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function Header({title = '', searchComponent}) {
  return (
    <AppBar
      color="default"
      position="sticky"
    >
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Link
              href="/"
              passHref
            >
              <Typography
                variant="h6"
                component={MuiLink}
                color="primary"
              >
                {title}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </Toolbar>

      <Divider
        light
        component="div"
      />

      <Toolbar variant="regular">
        {searchComponent}
      </Toolbar>

      <Divider
        light
        component="div"
      />
    </AppBar>
  );
}

export default Header;
