/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import StoreCard from './StoreCard';
import CartList from './CartList';
import { cartService } from '../_services';
import { SET_CURRENT_PAGE } from '../App';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
  }

  componentWillMount() {
    const { getCart } = cartService;
    const cartItems = getCart().then(
      items => this.setState({
        cartItems: items,
      }),
    );
    const { dispatch } = this.props;
    this.setState({}, () => dispatch({
      type: SET_CURRENT_PAGE,
      page: 3,
    }));
  }

  componentDidMount() {
    const { getCart } = cartService;
    const cartItems = getCart().then(
      items => this.setState({
        cartItems: items,
      }),
    );
  }

  componentWillReceiveProps(nextProps) {
    const { getCart } = cartService;
    const cartItems = getCart().then(
      items => this.setState({
        cartItems: items,
      }),
    );
  }

  render() {
    const { cartItems } = this.state;
    const { orders } = this.props;
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
        {orders.length === 0 ? (
          <Typography
            variant="h3"
            align="center"
            style={{
              color: 'gray',
              marginTop: 20,
              marginLeft: '4vw',
            }}
          >
            Seems a little empty around here
          </Typography>) : ''}
        {orders.length > 0 && orders.map(order => (
          <CartList key={order.id} data={order} total={order.orderPrice} orderId={order.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.userProfile.orders,
});

export default connect(mapStateToProps)(CartPage);
