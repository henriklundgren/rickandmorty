import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(t => ({
  paper: {
    display: 'flex',
    flex: 1,
  },
  input: {
    flex: 1,
    padding: t.spacing(1, 1),
  },
  button: {
    borderRadius: 0,
  },
  close: {
    margin: t.spacing(0, 1, 0, 0),
  },
}));

export default useStyles;

