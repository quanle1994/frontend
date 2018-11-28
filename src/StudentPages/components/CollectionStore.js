import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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
