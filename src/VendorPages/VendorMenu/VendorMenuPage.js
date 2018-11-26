/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import MenuCard from './components/MenuCard';
import AddItemDialog from './components/AddItemDialog';
import api from '../../_api/vendors';
import { SET_CURRENT_PAGE } from '../../App';
import ErrorDialog from '../../_commons/ErrorDialog';
import VendorProfile from './components/VendorProfile';

export const GET_VENDOR_DETAILS_SUCCESS = 'GET_VENDOR_DETAILS_SUCCESS';
class VendorMenuPage extends React.Component {
  componentWillMount() {
    // const { dispatch } = this.props;
    // api.getVendorDetails(JSON.parse(localStorage.getItem('user')).id)
    //   .then((response) => {
    //     dispatch({
    //       type: GET_VENDOR_DETAILS_SUCCESS,
    //       data: response.data,
    //     });
    //     localStorage.setItem('store', JSON.stringify(response.data));
    //   }).catch(error => ErrorDialog('retrieving vendor details', error));
    // this.setState({}, () => dispatch({
    //   type: SET_CURRENT_PAGE,
    //   page: 0,
    // }));
  }

  render() {
    const { vendorDetails, classes } = this.props;
    return (
      <div style={{
        width: '100%',
        boxSizing: 'border-box',
      }}
      >
        <VendorProfile />
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
          }}
        >
          {vendorDetails.name}
        </Typography>
        <AddItemDialog />
        {vendorDetails.dishes !== undefined && vendorDetails.dishes.map(d => (
          <MenuCard item={d} />
        ))}
        <MenuCard />
        <div style={{
          height: '20vh',
        }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vendorDetails: state.userProfile.vendorDetails,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(VendorMenuPage);
