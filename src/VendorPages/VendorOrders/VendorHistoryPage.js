/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import Calendar from './Calendar';
import Divider from '@material-ui/core/Divider';
import VendorTotalRevenue from './VendorTotalRevenue';
import VendorRevenueHistoryList from './VendorRevenueHistoryList';


class VendorHistoryPage extends React.Component {
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
        >History
        </Typography>
        <Calendar/>
        <Divider
        style={{
          marginTop: 20,
        }}
        />

        <VendorRevenueHistoryList/>
        <VendorTotalRevenue/>
      </div>
    );
  }
}

export default connect()(VendorHistoryPage);
