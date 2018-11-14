import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import '../HomePage/css/HomePage.css';
import ProfilePage from '../ProfilePage/ProfilePage';
import { history } from '../_helpers';
import VendorMenuPage from './VendorMenu/VendorMenuPage';
import VendorOrdersPage from './VendorOrders/VendorOrdersPage';
import VendorHistoryPage from './VendorOrders/VendorHistoryPage';
import VendorTopBar from '../HomePage/components/VendorTopBar';
import VendorBottomBar from '../HomePage/components/VendorBottomBar';

class VendorPages extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <VendorTopBar />

        <Router history={history}>
          <main style={{
            flexGrow: 1,
            display: 'flex',
            overflow: 'scroll',
          }}
          >
            <Route exact path="/vendor/menu" component={VendorMenuPage} />
            <Route exact path="/vendor/vendorHistory" component={VendorHistoryPage} />
            <Route exact path="/vendor/vendorOrders" component={VendorOrdersPage} />
            <Route exact path="/vendor/profile" component={ProfilePage} />
          </main>
        </Router>
        <VendorBottomBar />
      </div>
    );
  }
}

export default connect()(VendorPages);
