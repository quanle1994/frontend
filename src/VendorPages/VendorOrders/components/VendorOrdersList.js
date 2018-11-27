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
import AssignmentIcon from '@material-ui/icons/Assignment';
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import VendorOrdersDetailsList from './VendorOrdersDetailsList';

const styles = theme => ({
  root: {
    width: 365,
    backgroundColor: theme.palette.background.paper,
  },
  listText: {
    fontSize: 20,
  },
});

class VendorOrdersList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listText }}
              inset
              primary="Incoming Orders"
            />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <VendorOrdersDetailsList />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ dispatch });

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(VendorOrdersList);
