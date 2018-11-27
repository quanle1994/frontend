/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import TotalAmount from './TotalAmount';
import OrderConfirmationDialog from './OrderConfirmationPage';
import OrderItems from './OrderItems';

const styles = {
  wrapper: {
    width: '100%',
    boxSizing: 'border-box',
  },
};

function FoodItem(props) {
  const {
    classes, data, total, orderId,
  } = props;
  if (!data) {
    return (
      <div />
    );
  }
  console.log(`******order:\n${JSON.stringify(data, undefined, 2)}`);

  return (
    <div className={classes.wrapper}>
      <div style={{
        overflow: 'hidden',
      }}
      >
        <OrderItems dish={data} />
        <TotalAmount dish={data} total={total} />
      </div>
      <div className="col-xs-8" />
      <OrderConfirmationDialog total={total} orderId={orderId} data={data} />
    </div>


  );
}

export default withStyles(styles)(FoodItem);
