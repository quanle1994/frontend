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

function CollectionStore(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-10" >Venue</div>
      <div className="col-xs-2" >Deck</div>
      <div className="col-xs-10" >Store</div>
      <div className="col-xs-2" >Menu</div>
    </div>



  );
}

export default withStyles(styles)(CollectionStore);
