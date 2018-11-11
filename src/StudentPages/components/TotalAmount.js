import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
  },
};

function FoodItem(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-10" >Total</div>
      <div className="col-xs-2" >$11.00</div>
    </div>

  );
}

export default withStyles(styles)(FoodItem);
