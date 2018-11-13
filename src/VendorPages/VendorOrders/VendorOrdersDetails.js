import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider/Divider';

const styles = {
  wrapper: {
    width: 275,
  },
};

function VendorOrdersDetails(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <div className="col-xs-10" >Kimichi Fried Rice</div>
      <div className="col-xs-2" >x1</div>
      <Divider/>
    </div>

  );
}

export default withStyles(styles)(VendorOrdersDetails);
