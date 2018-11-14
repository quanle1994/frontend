import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Badge from '@material-ui/core/Badge';
import BookmarkStores from './BookmarkStores';
import RemoveIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    width: 365,
    backgroundColor: theme.palette.background.paper,
  },
});

function BookmarkList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
          <BookmarkStores/>
          <IconButton className={classes.button} aria-label="Delete">
          <RemoveIcon/>
          </IconButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}

BookmarkList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookmarkList);
