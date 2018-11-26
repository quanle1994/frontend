/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';

class VendorTotalRevenue extends React.Component {
  render() {
    const { orders } = this.props;
    return (
      <div>
        <Typography
          variant="h4"
          style={{
            color: '#CB9D1B',
            marginTop: 20,
            marginLeft: '4vw',
            display: 'inline-block',
          }}
        >Total Revenue:
        </Typography>
        <Typography
          variant="h4"
          style={{
            color: 'black',
            marginTop: 20,
            marginLeft: '4vw',
            display: 'inline-block',
          }}
        >${parseFloat(orders.map(o => o.subtotal).reduce((a, b) => a + b, 0)).toFixed(2)}
        </Typography>
      </div>
    );
  }
}

export default connect()(VendorTotalRevenue);
