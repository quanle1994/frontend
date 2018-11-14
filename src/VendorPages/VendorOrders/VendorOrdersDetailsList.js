import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import VendorOrdersDetails from './VendorOrdersDetails';
import VendorConfirmOrderReadyDialog from './VendorConfirmOrderReadyDialog';


const styles = theme => ({
  root: {
    width: 365,
    backgroundColor: theme.palette.background.paper,
  },
});

function VendorOrdersDetailsList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
          <div className="col-xs-8" >

          <VendorOrdersDetails/></div>
          <div className="col-xs-4" >
          <VendorConfirmOrderReadyDialog/>
          </div>
        </ListItem>
      </List>
    </div>
  );
}

VendorOrdersDetailsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VendorOrdersDetailsList);
