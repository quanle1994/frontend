/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider';
import Calendar from './Calendar';
import VendorTotalRevenue from './VendorTotalRevenue';
import VendorRevenueHistoryList from './VendorRevenueHistoryList';
import { SET_CURRENT_PAGE } from '../../App';


class VendorHistoryPage extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    this.setState({}, () => dispatch({
      type: SET_CURRENT_PAGE,
      page: 2,
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
        >History
        </Typography>
        <Calendar />
        <Divider
          style={{
            marginTop: 20,
          }}
        />

        <VendorRevenueHistoryList />
        <VendorTotalRevenue />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect()(VendorHistoryPage);
