/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import CartList from './CartList';
import { SET_CURRENT_PAGE } from '../App';

class CartPage extends Component {
  componentWillMount() {
    // const { getCart } = cartService;
    // const cartItems = getCart().then(
    //   items => this.setState({
    //     cartItems: items,
    //   }),
    // );
    const { dispatch } = this.props;
    dispatch({
      type: SET_CURRENT_PAGE,
      page: 3,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { cart } = nextProps;
    const cartItems = Object.keys(cart).map(k => cart[k].dish);
    this.setState({ cartItems });
  }

  render() {
    const { cart } = this.props;
    // const { orders } = this.props;
    console.table(cart);

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
        {cart.length === 0 ? (
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
        {cart.length > 0 && cart.map(item => (
          <CartList key={item.id} data={item} total={item.price} orderId={item.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.userProfile.cart,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
