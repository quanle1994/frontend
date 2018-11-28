/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography/Typography';
import connect from 'react-redux/es/connect/connect';
import { customerService } from '../../_services';
import { history } from '../../_helpers/history';
import customerApi from '../../_api/customers';
import { GET_USER_ORDERS_SUCCESS } from '../../_reducers/userProfile.reducer';

class OrderConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getOrder = () => {
    const { dispatch } = this.props;
    customerApi.orders().then((response) => {
      dispatch({
        type: GET_USER_ORDERS_SUCCESS,
        orders: response.data.filter(o => o.customerOrderType.name !== 'IN BASKET'),
        cart: response.data.filter(o => o.customerOrderType.name === 'IN BASKET'),
      });
      history.push('/homepage/trackOrder');
    });
  };

  render() {
    const { total } = this.props;
    // const total = data.amount * data.dish.price;
    const { orderId } = this.props;
    console.log(`@@@orderId: ${orderId}`);
    if (!this.props.orderId) {
      return (<div />);
    }

    const orderNum = parseInt(orderId, 10);
    const totalPrice = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'SGD',
    }).format(total);
    return (
      <div
        className="col-xs-4"
        style={{
          marginTop: 10,
        }}
      >
        <Button
          variant="outlined"
          size="medium"
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
          id={orderId}
          // to={{
          //   pathname: './homepage',
          // }}
        >
          <Typography style={{
            fontSize: 15,
            color: '#DAA520',
          }}
          >
            Order
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
            Proceed with payment?
            </Typography>
          </DialogTitle>
          <DialogContent
            style={{
              textAlign: 'center',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          >
            <DialogContentText
              style={{
                fontSize: 10,
              }}
              id="alert-dialog-description"
            >
              <Typography
                variant="h5"
              >
              Order number:&nbsp;{orderId}<br />
              Total payment:&nbsp;{totalPrice}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions
            style={{
              textAlign: 'center',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          >
            <Button
              onClick={() => customerService.pay(orderNum).then(this.getOrder)}
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
              Pay
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
              Close
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmationPage);
