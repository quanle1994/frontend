import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MetaTags from 'react-meta-tags';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';

import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import HomePage from '../HomePage/index';
import UserTypePage from '../LoginPage/UserTypePage';
import RegisterVendorPage from '../RegisterPage/RegisterVendorPage';
import VendorPages from '../VendorPages';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div id="parentWrapper" className="wrapper">
        <MetaTags>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </MetaTags>
        <div>
          <div className="col">
            {alert.message
                        && <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
            <Router history={history}>
              <div>
                {/* <PrivateRoute exact path="/" component={HomePage}/>/ */}
                <Route path="/login" component={LoginPage} />
                <Route path="/homepage" component={HomePage} />
                <Route path="/vendor" component={VendorPages} />
                <Route path="/userType" component={UserTypePage} />
                <Route path="/registerStudent" component={RegisterPage} />
                <Route path="/registerVendor" component={RegisterVendorPage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
