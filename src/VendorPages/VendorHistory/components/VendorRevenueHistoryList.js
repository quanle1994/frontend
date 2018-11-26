import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import VendorRevenueDetails from './VendorRevenueDetails';
import Typography from "@material-ui/core/Typography/Typography";


const styles = theme => ({
  root: {
    width: 365,
    backgroundColor: theme.palette.background.paper,
  },
});

function VendorRevenueHistoryList(props) {
  const { classes, orders } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {orders.length === 0 && (
          <ListItem>
            <Typography variant="h4" color="error">No Completed Orders Found</Typography>
          </ListItem>
        )}
        {orders.map(o => (
          <ListItem>
            <VendorRevenueDetails order={o} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

VendorRevenueHistoryList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VendorRevenueHistoryList);
