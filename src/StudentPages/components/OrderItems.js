/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
    width: '100%',
  },
};

function dishItems(props) {
  const { classes, dish } = props;
  if (!dish) {
    return (
      <div />
    );
  }
  // console.log(JSON.stringify(dish, undefined, 2));

  const qty = dish.amount;
  const length = 12;
  const dishName = dish.dish.name;
  const trimmedDishName = dishName.length > length
    ? `${dishName.substring(0, length - 3)}...` : dishName;
  const dishPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'SGD',
  }).format(dish.dish.price);
  const subtotal = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'SGD',
  }).format(dish.dish.price * qty);
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-5">{trimmedDishName} ({dishPrice})</div>
      <div className="col-xs-3">x {qty}</div>
      <div className="col-xs-4">{subtotal}</div>
    </div>
  );
}

export default withStyles(styles)(dishItems);
