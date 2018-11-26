import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider/Divider';

const styles = {
  wrapper: {
    width: 275,
  },
};

function VendorRevenueDetails(props) {
  const { classes, order } = props;
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-10">{order.dishName}</div>
      <div className="col-xs-2"> {order.subtotal}</div>
      <Divider />
    </div>
  );
}

export default withStyles(styles)(VendorRevenueDetails);
