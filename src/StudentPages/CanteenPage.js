/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography/Typography';
import CanteenCard from './CanteenCard';
import CanteenCard1 from './Hardcode/CanteenCard1';
import CanteenCard2 from './Hardcode/CanteenCard2';
import { canteenActions } from '../_actions'
import { canteenConstants } from '../_constants';
import { history } from '../_helpers/history';

class CanteenPage extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(canteenActions.getAllCanteens());
  }

  onCanteenClick(canteenId) {
    console.log('####clicked a canteen');
    const {dispatch} = this.props;
    dispatch({
      type: canteenConstants.SET_CURRENT_CANTEEN,
      currentCanteen: canteenId
    });
    history.push('/homepage/store');
  }



  render() {
    return (
      <div>
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
          }}
        >Canteen
        </Typography>
        <div className="col-xs-6" onClick = {() => this.onCanteenClick(0)} >
          <CanteenCard/>
        </div>
        <div className="col-xs-6" onClick = {() => this.onCanteenClick(1)} >
          <CanteenCard1/>
        </div>
        <div className="col-xs-6" onClick = {() => this.onCanteenClick(2)} >
          <CanteenCard2/>
        </div>
      </div>
    );
  }
}

export default connect()(CanteenPage);
