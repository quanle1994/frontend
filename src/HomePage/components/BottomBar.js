import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Bookmark from '@material-ui/icons/Bookmark';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Assignment from '@material-ui/icons/Assignment';
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import Badge from '@material-ui/core/Badge/Badge';
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

class SimpleBottomNavigation extends React.Component {
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
    const { classes, bookmark, orders } = this.props;
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
          label="Home"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          onClick={() => { history.push('/homepage/canteen'); }}
          icon={<Home className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Bookmark"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}
          onClick={() => { history.push('/homepage/bookmark'); }}
          icon={(
            <Badge className={classes.margin} badgeContent={bookmark.length} color="secondary">
              <Bookmark className={classes.icon} />
            </Badge>
          )}
        />
        <BottomNavigationAction
          label="Orders"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}

          onClick={() => { history.push('/homepage/trackOrder'); }}
          icon={(
            <Badge className={classes.margin} badgeContent={orders.length} color="secondary">
              <Assignment className={classes.icon} />
            </Badge>
          )}
        />
        <BottomNavigationAction
          label="Cart"
          classes={{
            selected: classes.selected,
            label: classes.label,
          }}

          onClick={() => { history.push('/homepage/cart'); }}
          icon={
            <ShoppingCart className={classes.icon} />
            }
        />
      </BottomNavigation>
    );
  }
}

const mapStateToProps = state => ({
  page: state.currentPage.page,
  bookmark: state.userProfile.bookmark,
  orders: state.userProfile.orders,
});

export default compose(withStyles(styles), connect(mapStateToProps))(SimpleBottomNavigation);
