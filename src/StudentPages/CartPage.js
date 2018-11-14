/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import StoreCard from './StoreCard';
import CartList from './CartList';
import { cartService } from '../_services';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
  }

  componentDidMount() {
    const { getCart } = cartService;
    const cartItems = getCart().then(
      items => this.setState({
        cartItems: items,
      })
    )
  }

  render() {
    const { cartItems } = this.state;
    console.log('### cartitems: ###');
    console.table(cartItems);
    
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
        {cartItems.length == 0 ? (
          <Typography 
            variant="h3"
            align="center"
            style={{
              color: 'gray',
              marginTop: 20,
              marginLeft: '4vw',
            }}>
            Seems a little empty around here
          </Typography>) : ''}
        {cartItems ? cartItems.map((item, key) => {
          return (<CartList key={key} data={item} total={item.orderPrice} orderId={item.id} />)
        }) : 'loading cartItems...'}
      </div>
    );
  }
}

export default connect()(CartPage);
