import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './search.styles.js';

function Search({value, onChange, onDone, q}) {
  const classes = useStyles();
 
  return (
    <Paper
      className={classes.paper}
      elevation={0}
      variant="outlined"
      role="search"
      component="form"
    >
      <Button
        className={classes.button}
        variant="contained"
      >
        {/* TODO */}
        Characters
        <ArrowDownIcon fontSize="small" />
      </Button>
      <InputBase
        type="search"
        fullWidth
        className={classes.input}
        placeholder="Search characters"
        name="search"
        value={value}
        onChange={(event) => onChange(event, event.target.value)}
        onKeyDown={(event) => {
          const {key} = event;

          if (key === 'Enter') {
            event.preventDefault();

            if (value.length >= 3) {
              onDone(value);
            }
          }
        }}
      />

      {do {
        if (q) {
          <Link
            href="/"
            passHref
          >
            <IconButton
              className={classes.close}
              size="medium"
              disableFocusRipple
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Link>
        } else {
          false;
        }
      }}

      <Button
        className={classes.button}
        variant="contained"
        disabled={do {
          if (value === q) {
            true;
          } else if (value.length >= 3) {
            false;
          } else {
            true;
          }
        }}
        onClick={(_) => {
          if (value === q) {
            return;
          }

          if (value.length >= 3) {
            onDone(value)
          }
        }}
      >
        <SearchIcon />
      </Button>
    </Paper>
  );
}

export default Search;
