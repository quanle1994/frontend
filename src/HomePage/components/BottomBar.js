import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Bookmark from '@material-ui/icons/Bookmark';
import History from '@material-ui/icons/History';
import Search from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: '100%',
    backgroundColor: '#CB9D1B',
    height: 70,
    overflow: 'hidden',
  },
  icon: {
    fontSize: 38,
    // position: 'absolute',
    // top: 2,
  },
  selected: {
    color: 'White !important',
    // position: 'relative',
  },
  label: {
    // position: 'absolute',
    // bottom: 0,
    fontSize: '15px !important',
  },
};

class SimpleBottomNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: -1,
    };
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const handleChange = (event, value) => {
      this.setState({ value });
    };

    return (
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          icon={<Home className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Bookmark"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          icon={<Bookmark className={classes.icon} />}
        />
        <BottomNavigationAction
          label="History"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          icon={<History className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Search"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          icon={<Search className={classes.icon} />}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(SimpleBottomNavigation);
