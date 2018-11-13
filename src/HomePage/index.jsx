import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import SimpleBottomNavigation from './components/BottomBar';
import './css/HomePage.css';
import ProfilePage from '../ProfilePage/ProfilePage';
import { history } from '../_helpers';
import VendorMenuPage from '../VendorPages/VendorMenu/VendorMenuPage';
import VendorOrdersPage from '../VendorPages/VendorOrders/VendorOrdersPage';
import VendorHistoryPage from '../VendorPages/VendorOrders/VendorHistoryPage';
import CanteenCard from '../StudentPages/CanteenCard';
import Typography from '@material-ui/core/Typography/Typography';
import CanteenPage from '../StudentPages/CanteenPage';
import StudentOrderPage from '../StudentPages/StudenOrderPage';
import CanteenStorePage from '../StudentPages/CanteenStorePage';
import CartPage from '../StudentPages/CartPage';
import TrackOrderPage from '../StudentPages/TrackOrderPage';
import BookmarkPage from '../StudentPages/BookmarkPage';

const HomePage = (props) => {
  const { classes } = props;
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <TopBar />

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
          <Route exact path="/homepage/canteen" component={CanteenPage} />
          <Route exact path="/homepage/menu" component={StudentOrderPage} />
          <Route exact path="/homepage/store" component={CanteenStorePage}/>
          <Route exact path="/homepage/cart" component={CartPage}/>
          <Route exact path="/homepage/trackOrder" component={TrackOrderPage}/>
          <Route exact path="/homepage/bookmark" component={BookmarkPage}/>


        </main>

      </Router>


      <SimpleBottomNavigation />
    </div>
  );
};

export default connect()(HomePage);
