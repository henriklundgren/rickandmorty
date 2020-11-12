import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Pagination from '@material-ui/lab/Pagination';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function Footer({pages, page, onChange}) {
  return (
    <AppBar component="div">
      <Toolbar variant="regular">
        <Grid
          container
          justify="center"
        >
          <Pagination
            disabled={page > pages}
            count={pages}
            onChange={onChange}
            page={page}
          />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;

