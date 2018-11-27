/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import TrackOrderList from './TrackOrderList';
import { cartService } from '../_services';
import { SET_CURRENT_PAGE } from '../App';


class TrackOrderPage extends React.Component {
  constructor(props) {
    super(props);
    cartService.getOrders();
    const orders = JSON.parse(localStorage.getItem('orderStatus'));
    console.log(JSON.stringify(orders, undefined, 2));
    this.state = {
      orders: orders === null ? [] : orders,
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    this.setState({}, () => dispatch({
      type: SET_CURRENT_PAGE,
      page: 2,
    }));
  }

  render() {
    const { orders } = this.state;
    const orderLists = orders.map(order => (
      <TrackOrderList order={order} key={order.id} />
    ));


    return (
      <div>
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
          }}
        >Order Status
        </Typography>
        <div>
          {orderLists}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(TrackOrderPage);
