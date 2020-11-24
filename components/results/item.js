import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './item.styles.js';

function Item({id, name, image, episode, location}) {
  const classes = useStyles();
  const href = `/products/${id}`;

  return (
    <Grid
      item
      style={{ position: 'relative' }}
      xs={12}
      sm={6}
      md={4}
      lg={2}
    >
      <Card
        square
        raised
        elevation={0}
      >
        <Link
          href={href}
          passHref
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="div"
              title={name}
              image={image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                noWrap
              >
                {name}
              </Typography>
              <Grid container>
                <Grid
                  item
                  xs={6}
                >
                  <Typography
                    variant="subtitle2"
                    noWrap
                  >
                    {location?.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  justify="flex-end"
                >
                  <Typography
                    variant="subtitle2"
                    noWrap
                  >
                    Episodes: {episode?.length}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}

export default Item;

