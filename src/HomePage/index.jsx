import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import SimpleBottomNavigation from './components/BottomBar';
import './css/HomePage.css';
import Content from './pages/Content';
import ProfilePage from '../ProfilePage/ProfilePage';
import { history } from '../_helpers';

const HomePage = (props) => {
  const { classes } = props;
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <TopBar />
      <Router history={history}>
        <main style={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'scroll',
        }}>
          <Route exact path="/homepage" component={Content} />
          <Route exact path="/homepage/profile" component={ProfilePage} />
        </main>
      </Router>
      <SimpleBottomNavigation />
    </div>
  );
};

export default connect()(HomePage);
