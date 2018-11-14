import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TotalAmount from './TotalAmount';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import OrderConfirmationDialog from './OrderConfirmationPage';
import OrderItems from './OrderItems';

const styles = {
  wrapper: {
  },
};

function FoodItem(props) {
  const { classes } = props;
  if(!props.data) {
    return (
      <div></div>
    );
  }
  const { data, total, orderId } = props;
  return (
    <div className={classes.wrapper}>
      <OrderItems data={data}/>
      <TotalAmount total={total} />
      <div className="col-xs-5"></div>
      <div className="col-xs-7">
        <OrderConfirmationDialog total={total} orderId={orderId} />
      </div>
    </div>



  );
}

export default withStyles(styles)(FoodItem);
