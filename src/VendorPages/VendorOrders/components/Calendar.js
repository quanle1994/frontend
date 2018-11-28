/* eslint-disable react/jsx-one-expression-per-line */
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

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '2018-11-20',
      endDate: '2018-11-27',
    };
  }

  render() {
    const { classes } = this.props;
    const { startDate, endDate } = this.state;
    const handleChange = e => this.setState({
      [e.target.name]: e.target.value,
    });
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          type="date"
          style={{
            marginTop: 20,
            marginLeft: 20,
            width: '42%',
            float: 'left',
          }}
          label={(
            <Typography
              style={{
                fontSize: 20,
                color: '#DAA520',
              }}
            >Select Start Date
            </Typography>
          )}
          name="startDate"
          value={startDate}
          onChange={handleChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            style: {
              fontSize: 15,
            },
          }}
        />

        <TextField
          id="date"
          type="date"
          style={{
            marginTop: 20,
            marginLeft: 20,
            width: '42%',
            float: 'left',
          }}
          label={(
            <Typography
              style={{
                fontSize: 20,
                color: '#DAA520',
              }}
            >Select End Date
            </Typography>
          )}
          name="endDate"
          value={endDate}
          onChange={handleChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            style: {
              fontSize: 15,
            },
          }}
        />
      </form>
    );
  }
}

export default withStyles(styles)(Calendar);
