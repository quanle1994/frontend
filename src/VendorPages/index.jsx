import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import VendorTopBar from '../homepage/components/VendorTopBar';
import VendorBottomBar from '../homepagecomponents/VendorBottomBar';
import './css/HomePage.css';
import ProfilePage from '../ProfilePage/ProfilePage';
import { history } from '../_helpers';
import VendorMenuPage from '../VendorPages/VendorMenu/VendorMenuPage';
import VendorOrdersPage from '../VendorPages/VendorOrders/VendorOrdersPage';
import VendorHistoryPage from '../VendorPages/VendorOrders/VendorHistoryPage';
import VendorBottomBar from '../HomePage/components/VendorBottomBar';

const VendorPages = (props) => {
  const { classes } = props;
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
          <Route exact path="/homepage/vendor" component={VendorMenuPage} />
          <Route exact path="/homepage/vendorHistory" component={VendorHistoryPage} />
          <Route exact path="/homepage/vendorOrders" component={VendorOrdersPage} />
          <Route exact path="/homepage/profile" component={ProfilePage} />

        </main>

      </Router>


      <VendorBottomBar />
    </div>
  );
};

export default connect()(VendorPages);
