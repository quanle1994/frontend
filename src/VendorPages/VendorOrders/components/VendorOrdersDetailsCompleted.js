/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider/Divider';

const styles = {
  wrapper: {
    width: 275,
  },
};

function VendorOrdersDetailsCompleted(props) {
  const { classes, order } = props;
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-8">{order.dishName}</div>
      <div className="col-xs-2">x{order.amount}</div>
      <div className="col-xs-2">{parseFloat(order.subtotal).toFixed(2)}</div>
      <Divider />
    </div>

  );
}

export default withStyles(styles)(VendorOrdersDetailsCompleted);
