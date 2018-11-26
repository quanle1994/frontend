import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AssignmentDoneIcon from '@material-ui/icons/AssignmentTurnedIn';
import { compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import VendorOrdersDetailsCompleted from './VendorOrdersDetailsCompleted';

const styles = theme => ({
  root: {
    width: 365,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  listText: {
    fontSize: 20,
  },
});

class VendorCompletedList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, completedOrders } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <AssignmentDoneIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listText }}
              inset
              primary="Completed Orders"
            />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {completedOrders.map(o => (
                <ListItem className={classes.nested}>
                  <VendorOrdersDetailsCompleted order={o} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  completedOrders: state.vendorOrders.completedOrders,
});

export default compose(withStyles(styles), connect(mapStateToProps))(VendorCompletedList);
