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
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <CollectionStore/>
      <div className="col-xs-1"></div>
      <div className="col-xs-11">
        Ordered dishes:
      </div>
      <OrderItems/>
      <TotalAmount/>

    </div>



  );
}

export default withStyles(styles)(OrderDetails);
