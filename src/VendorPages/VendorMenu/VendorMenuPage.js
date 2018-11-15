/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import MenuCard from './MenuCard';
import AddItemDialog from './AddItemDialog';
import api from '../../_api/vendors';
import {SET_CURRENT_PAGE} from "../../App";

export const GET_VENDOR_DETAILS_SUCCESS = 'GET_VENDOR_DETAILS_SUCCESS';
class VendorMenuPage extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    api.getVendorDetails()
      .then(response => dispatch({
        type: GET_VENDOR_DETAILS_SUCCESS,
        data: response.data,
      }));
    this.setState({}, () => dispatch({
      type: SET_CURRENT_PAGE,
      page: 0,
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
        >Your Menu Items
        </Typography>
        <AddItemDialog />
        <MenuCard />
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(VendorMenuPage);
