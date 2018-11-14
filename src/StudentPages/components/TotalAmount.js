import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
  },
};

function FoodItem(props) {
  const { classes, dish } = props;
  if(!dish) {
    return (
      <div>
      </div>
    )
  }
  console.log(JSON.stringify(dish,undefined,2));

  const total = dish.amount * dish.dish.price;
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
