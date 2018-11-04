/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import withStyles from '@material-ui/core/es/styles/withStyles';
import { compose } from 'redux';
import { Route, Router } from 'react-router';
import { userActions } from '../../_actions/index';
import { SET_CURRENT_PAGE } from '../../App';
import VendorMenuPage from '../../VendorPages/VendorMenu/VendorMenuPage';
import {history} from "../../_helpers";
import ProfileCard from '../../ProfilePage/ProfileCard';
import CanteenCard from '../../StudentPages/CanteenCard';

class Content extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    this.setState({}, () => dispatch({
      type: SET_CURRENT_PAGE,
      page: 0,
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          style={{
            color: '#CB9D1B',
            marginTop: 20,
          }}
        >Welcome to Qoodie
        </Typography>
        {/*<Router history={history}>*/}
          {/*<main>*/}
            {/*<Route exact path="/homepage/vendor" component={VendorMenuPage} />*/}
            {/*<Route />*/}
            {/*<Route />*/}
          {/*</main>*/}
        {/*</Router>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
});

const styles = {
  themeColor: {
    color: '#CB9D1B',
  },
};

export default compose(withStyles(styles), connect(mapStateToProps))(Content);
