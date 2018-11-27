import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import TotalAmount from './TotalAmount';

const styles = {
  wrapper: {

  },
};

function dishItems(props) {
  const { classes, dish } = props;
  if (!dish) {
    return (
      <div />
    );
  }
  console.log(JSON.stringify(dish, undefined, 2));

  const qty = dish.amount;
  const length = 18;
  const dishName = dish.dish.name;
  const trimmedDishName = dishName.length > length
    ? `${dishName.substring(0, length - 3)}...` : dishName;
  const dishPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'SGD',
  }).format(dish.dish.price);
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-5">{dish.dish.name}</div>
      <div className="col-xs-3">x {qty}</div>
      <div className="col-xs-4">{dishPrice}</div>
    </div>
  );
}

export default withStyles(styles)(dishItems);
