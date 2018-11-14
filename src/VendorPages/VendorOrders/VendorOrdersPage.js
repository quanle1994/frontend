/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import VendorOrdersList from './VendorOrdersList';
import VendorCompletedList from './VendorCompletedList';
import api from '../../_api/vendors';

export const GET_ORDERS_BY_VENDOR_ID = 'GET_ORDERS_BY_VENDOR_ID';
class VendorOrdersPage extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    api.getOrdersByVendorId(18).then(response => dispatch({
      type: GET_ORDERS_BY_VENDOR_ID,
      data: response.data,
    }));
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
        >Orders
        </Typography>
        <VendorOrdersList />
        <VendorCompletedList />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(VendorOrdersPage);
