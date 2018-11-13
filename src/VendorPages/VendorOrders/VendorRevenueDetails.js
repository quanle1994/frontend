import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider/Divider';

const styles = {
  wrapper: {
    width: 275,
  },
};

function VendorRevenueDetails(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-10" >[Order Number]</div>
      <div className="col-xs-2" > $5.50</div>
      <Divider />
    </div>



  );
}

export default withStyles(styles)(VendorRevenueDetails);
