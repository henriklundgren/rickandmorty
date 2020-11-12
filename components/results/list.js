import React from 'react';
import Grid from '@material-ui/core/Grid';
import Item from './item.js';
import Footer from './footer.js';
import useStyles from './list.styles.js';

// TODO
function NoResults() {
  return (
    <div>No results</div>
  );
}

function List({results, page, pages, onChange}) {
  const classes = useStyles();

  if (!results?.length) {
    return <NoResults />;
  }

  return (
    <>
      <Grid
        container
        component="ul"
        className={classes.ul}
      >
        {results.map(props => {
          return <Item key={props.id} {...props} />;
        })}
      </Grid>
      <Footer
        page={page}
        pages={pages}
        onChange={onChange}
      />
    </>
  );
}

export default List;

