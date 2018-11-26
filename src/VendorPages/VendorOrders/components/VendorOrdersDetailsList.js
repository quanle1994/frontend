import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import VendorOrdersDetails from './VendorOrdersDetails';
import VendorConfirmOrderReadyDialog from './VendorConfirmOrderReadyDialog';


const styles = theme => ({
  root: {
    width: 365,
    backgroundColor: theme.palette.background.paper,
  },
});

class VendorOrdersDetailsList extends React.Component {
  render() {
    const { classes, incomingOrders } = this.props;
    return (
      <div className={classes.root}>
        {incomingOrders.map(io => (
          <List component="nav">
            <ListItem>
              <div
                className="col-xs-8"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                }}
              >
                <VendorOrdersDetails order={io} />
              </div>
              <div className="col-xs-4">
                <VendorConfirmOrderReadyDialog order={io} />
              </div>
            </ListItem>
          </List>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incomingOrders: state.vendorOrders.incomingOrders,
});

export default compose(withStyles(styles), connect(mapStateToProps))(VendorOrdersDetailsList);
