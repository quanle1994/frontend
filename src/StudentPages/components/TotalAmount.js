import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
  },
};

function FoodItem(props) {
  const { classes, total } = props;
  // console.log(JSON.stringify(dish, undefined, 2));
  const totalPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'SGD',
  }).format(total);

  return (
    <div className={classes.wrapper}>
      <div className="col-xs-8">Total</div>
      <div className="col-xs-4">{totalPrice}</div>
    </div>

  );
}

export default withStyles(styles)(FoodItem);
