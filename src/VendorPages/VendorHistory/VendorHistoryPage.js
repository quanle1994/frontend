/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider';
import Calendar from '../VendorOrders/components/Calendar';
import VendorTotalRevenue from './components/VendorTotalRevenue';
import VendorRevenueHistoryList from './components/VendorRevenueHistoryList';
import { SET_CURRENT_PAGE } from '../../App/index';
import ErrorDialog from '../../_commons/ErrorDialog';
import vendorApi from '../../_api/vendors';


class VendorHistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }


  componentDidMount() {
    const { dispatch, vendorDetails } = this.props;
    const params = {
      vendorId: parseFloat(JSON.parse(localStorage.getItem('store')).vendorId),
      startDate: new Date().getTime(),
      endDate: new Date().getTime() - 86400000,
    };
    vendorApi.getVendorOrders(params).then((response) => {
      this.setState({
        orders: response.data,
      });
    }).catch(error => ErrorDialog('getting vendor orders', error));
    this.setState({}, () => dispatch({
      type: SET_CURRENT_PAGE,
      page: 2,
    }));
  }

  render() {
    const { orders } = this.state;
    return (
      <div>
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
          }}
        >History
        </Typography>
        <Calendar />
        <Divider
          style={{
            marginTop: 20,
          }}
        />

        <VendorRevenueHistoryList orders={orders} />
        <VendorTotalRevenue orders={orders} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vendorDetails: state.userProfile.vendorDetails,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(VendorHistoryPage);
