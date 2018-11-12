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
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-2" >1x</div>
      <div className="col-xs-8" >Chicken Rice</div>
      <div className="col-xs-2" >$3.50</div>
    </div>



  );
}

export default withStyles(styles)(OrderItems);
