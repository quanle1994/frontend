/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import VendorOrdersList from './VendorOrdersList';
import VendorCompletedList from './VendorCompletedList';


class VendorOrdersPage extends React.Component {
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
        <VendorOrdersList/>
        <VendorCompletedList/>
      </div>
    );
  }
}

export default connect()(VendorOrdersPage);
