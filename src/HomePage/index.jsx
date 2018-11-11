import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import SimpleBottomNavigation from './components/BottomBar';
import './css/HomePage.css';
import Content from './pages/Content';
import ProfilePage from '../ProfilePage/ProfilePage';
import { history } from '../_helpers';
import VendorMenuPage from '../VendorPages/VendorMenu/VendorMenuPage';
import CanteenCard from '../StudentPages/CanteenCard';
import Typography from '@material-ui/core/Typography/Typography';
import CanteenMenuPage from '../StudentPages/CanteenMenuPage';
import StudentOrderPage from '../StudentPages/StudenOrderPage';
import CanteenStorePage from '../StudentPages/CanteenStorePage';
import CartPage from '../StudentPages/CartPage';

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
          <Route exact path="/homepage/profile" component={ProfilePage} />
          <Route exact path="/homepage/canteen" component={CanteenMenuPage} />
          <Route exact path="/homepage/menu" component={StudentOrderPage} />
          <Route exact path="/homepage/store" component={CanteenStorePage}/>
          <Route exact path="/homepage/cart" component={CartPage}/>
        </main>

      </Router>


      <SimpleBottomNavigation />
    </div>
  );
};

export default connect()(HomePage);
