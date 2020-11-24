import React from 'react';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

const text = `
The details should include a CTA with the text “Buy merchandise” that if clicked
should showan alert that the merchandise was clicked.

For the scope of this exercise, we will not linkdirectly to the Merchandise platform.
`;

function BuyDialog({open, onCancel, onOk}) {
  return (
    <Dialog open={open}>
      <DialogTitle>
        Buy
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onOk}>
          Ok
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// TODO
function NoProduct() {
  return <div>No Product</div>;
}

function Main({image, name}) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    return setOpen(state => !state);
  };

  return (
    <>
      <BuyDialog
        open={open}
        onCancel={_ => setOpen(false)}
        onOk={_ => setOpen(false)}
      />

      <Grid container style={{ flex: 1, display: 'flex' }}>
        <Grid
          item
          xs={6}
          container
          justify="center"
          alignItems="center"
        >
          {/* carusel */}
          <div>
            <img src={image} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2">
            {name}
          </Typography>

          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={toggleOpen}
          >
            Buy merchandise
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

function Product({result}) {
  const router = useRouter();

  return (
    <Container
      maxWidth={false}
      style={{ display: 'flex' }}
    >
      {do {
        if (!result || result.error) {
          <NoProduct />;
        } else {
          <Main
            name={result.name}
            image={result.image}
          />;
        }
      }}
    </Container>
  );
}

export default Product;

