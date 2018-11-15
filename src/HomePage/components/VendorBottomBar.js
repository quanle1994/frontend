import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Assignment from '@material-ui/icons/Assignment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import History from '@material-ui/icons/History';
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import { history } from '../../_helpers/history';

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

class VendorBottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: -1,
    };
  }

  componentWillMount() {
    const { page } = this.props;
    this.setState({
      value: page,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { page } = nextProps;
    this.setState({
      value: page,
    });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const handleChange = (event, val) => {
      this.setState({ value: val });
    };

    return (
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Profile"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          onClick={() => { history.push('/vendor/menu'); }}
          icon={<AccountCircle className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Canteen"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          onClick={() => { history.push('/vendor/canteen'); }}
          icon={<Home className={classes.icon} />}
        />
        <BottomNavigationAction
          label="History"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          onClick={() => { history.push('/vendor/vendorHistory'); }}
          icon={<History className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Orders"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          onClick={() => { history.push('/vendor/vendorOrders'); }}
          icon={
            <Assignment className={classes.icon} />
            }

        />
      </BottomNavigation>
    );
  }
}

const mapStateToProps = state => ({
  page: state.currentPage.page,
});

export default compose(withStyles(styles), connect(mapStateToProps))(VendorBottomBar);
