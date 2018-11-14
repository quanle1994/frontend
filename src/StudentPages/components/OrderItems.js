import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TotalAmount from './TotalAmount';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import OrderConfirmationDialog from './OrderConfirmationPage';

const styles = {
  wrapper: {

  },
};

function OrderItems(props) {
  const { classes } = props;
  if(!props.data) {
    return (
      <div>
      </div>
    )
  }
  const { data } = props;
  const qty = data.amount;
  const length = 18;
  const dishName = data.item.name;
  const trimmedDishName = dishName.length > length ?
                          dishName.substring(0, length-3) + "..." : dishName;
  const dishPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'SGD',
  }).format(data.item.price);
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-2" >{qty}x</div>
      <div className="col-xs-8" >{trimmedDishName}</div>
      <div className="col-xs-2" >{dishPrice}</div>
    </div>



  );
}

export default withStyles(styles)(OrderItems);
