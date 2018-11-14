import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
  },
};

function FoodItem(props) {
  const { classes } = props;
  if(!props.total) {
    return (
      <div></div>
    );
  }
  const { total } = props;
  const totalPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'SGD',
  }).format(total);

  return (
    <div className={classes.wrapper}>
      <div className="col-xs-10" >Total</div>
      <div className="col-xs-2" >{totalPrice}</div>
    </div>

  );
}

export default withStyles(styles)(FoodItem);
