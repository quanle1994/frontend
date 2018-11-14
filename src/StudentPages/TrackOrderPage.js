/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import TrackOrderList from './TrackOrderList';
import { cartService } from '../_services';
import config from 'config';
import { authHeader } from '../_helpers';


class TrackOrderPage extends React.Component {
  constructor(props) {
    super(props);
    cartService.getOrders();
    const orders = JSON.parse(localStorage.getItem("orderStatus"));
    console.log(JSON.stringify(orders, undefined,2));
    this.state = {
      orders: orders
    }
  }

  render() {

    const orderLists = this.state.orders.map(order => {
      return (
        <TrackOrderList order={order} key={order.id}/>
      );
    });



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

export default connect()(TrackOrderPage);
