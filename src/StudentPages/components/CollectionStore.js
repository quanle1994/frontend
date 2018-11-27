import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import TotalAmount from './TotalAmount';
import OrderConfirmationDialog from './OrderConfirmationPage';

const styles = {
  wrapper: {

  },
};

function CollectionStore(props) {
  const { classes, order } = props;
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-8">Venue</div>
      <div className="col-xs-4">{order.orderDishes[0].dish.store.canteen.name}</div>
      <div className="col-xs-8">Store</div>
      <div className="col-xs-4">{order.orderDishes[0].dish.store.name}</div>
    </div>
  );
}

export default withStyles(styles)(CollectionStore);
