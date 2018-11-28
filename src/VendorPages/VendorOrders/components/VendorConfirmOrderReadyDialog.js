/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography/Typography';
import ErrorDialog from '../../../_commons/ErrorDialog';
import vendorApi from '../../../_api/vendors';
import SuccessDialog from '../../../_commons/SuccessDialog';
import { GET_ORDERS_BY_VENDOR_ID } from '../VendorOrdersPage';
import connect from "react-redux/es/connect/connect";

class VendorConfirmOrderReadyDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSetReady = (id) => {
    const { dispatch } = this.props;
    vendorApi.setOrderToReady(id).then(() => {
      SuccessDialog('Update Order Status Successfully', 'Order', 'updated');
      this.handleClose();
      vendorApi.getOrdersByVendorId(parseFloat(JSON.parse(localStorage.getItem('user')).id)).then(response => dispatch({
        type: GET_ORDERS_BY_VENDOR_ID,
        data: response.data,
      }));
    }).catch(error => ErrorDialog('updating order status', error));
  };

  render() {
    const { order } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          size="small"
          // component={Link}
          style={{
            borderColor: '#DAA520',
            backgroundColor: 'floralWhite',
            textTransform: 'none',
            textDecoration: 'none',
            justifyItems: 'center',
            alignItems: 'center',
          }}
          onClick={this.handleClickOpen}
          // to={{
          //   pathname: './homepage',
          // }}
        >
          <Typography style={{
            fontSize: 15,
            color: '#DAA520',
          }}
          >Ready
          </Typography>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            style={{
              textAlign: 'center',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginTop: 0,
            }}
            id="alert-dialog-title"
          >
            <Typography
              variant="h4"
              style={{
                color: '#DAA520',
              }}
            >
              Order ready for collection?
            </Typography>
          </DialogTitle>
          <DialogActions
            style={{
              textAlign: 'center',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          >
            <Button
              onClick={() => this.handleSetReady(order.id)}
              variant="outlined"
              size="medium"
              style={{
                borderColor: '#DAA520',
                backgroundColor: 'floralWhite',
                textTransform: 'none',
                textDecoration: 'none',
                justifyItems: 'center',
                alignItems: 'center',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            >
              <Typography style={{
                fontSize: 15,
                color: '#DAA520',
              }}
              >
                Yes
              </Typography>
            </Button>
            <Button
              onClick={this.handleClose}
              variant="outlined"
              size="medium"
              style={{
                borderColor: '#DAA520',
                backgroundColor: 'floralWhite',
                textTransform: 'none',
                textDecoration: 'none',
                justifyItems: 'center',
                alignItems: 'center',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            >
              <Typography style={{
                fontSize: 15,
                color: '#DAA520',
              }}
              >
                No
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(VendorConfirmOrderReadyDialog);
