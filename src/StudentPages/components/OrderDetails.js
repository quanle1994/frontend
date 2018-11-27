/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TotalAmount from './TotalAmount';
import OrderItems from './OrderItems';
import CollectionStore from './CollectionStore';

const styles = {
  wrapper: {

  },
};

function OrderDetails(props) {
  const { classes, order } = props;
  const dishes = order.orderDishes.map(dish => (
    <div>
      Ordered dishes:
      {dish.dish.name}
      <OrderItems dish={dish} />
      <TotalAmount dish={dish} />
    </div>
  ));
  return (
    <div className={classes.wrapper}>
      <CollectionStore order={order} />
      <div className="col-xs-1" />
      <div className="col-xs-11">
        {dishes}
      </div>
    </div>
  );
}

export default withStyles(styles)(OrderDetails);
