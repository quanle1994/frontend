/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import StoreCard from './StoreCard';
import CartList from './CartList';
import { customerService } from '../_services/customer.service';

class CartPage extends Component {
  render() {
    console.log("### " + customerService.getCart());
    return (
      <div>
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
          }}
        >Cart
        </Typography>
        <CartList/>
        <CartList/>
      </div>
    );
  }
}

export default connect()(CartPage);
