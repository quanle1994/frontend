import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function Calendar(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <Typography style={{
        marginLeft:20,
        marginTop:20,
        fontSize: 15,
      }}>Select Day to Show History</Typography>
      <TextField
        id="date"
        type="date"
        style={{
          marginLeft:20,
        }}
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
