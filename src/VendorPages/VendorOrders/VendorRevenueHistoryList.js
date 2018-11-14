import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import VendorRevenueDetails from './VendorRevenueDetails';


const styles = theme => ({
  root: {
    width: 365,
    backgroundColor: theme.palette.background.paper,
  },
});

function VendorRevenueHistoryList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
          <VendorRevenueDetails/>
        </ListItem>
        <ListItem>
          <VendorRevenueDetails/>
        </ListItem>
      </List>
    </div>
  );
}

VendorRevenueHistoryList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VendorRevenueHistoryList);
