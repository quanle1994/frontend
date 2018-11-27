/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography/Typography';
import { customerService } from '../../_services';
import { history } from '../../_helpers/history';

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

  render() {
    const { data } = this.props;
    const total = data.amount * data.dish.price;
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
            borderColor: '#CB9D1B',
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
            color: '#CB9D1B',
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
                color: '#CB9D1B',
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
              onClick={() => customerService.pay(orderNum).then(() => history.push('/homepage/trackOrder'))}
              variant="outlined"
              size="medium"
              style={{
                borderColor: '#CB9D1B',
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
                color: '#CB9D1B',
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
                borderColor: '#CB9D1B',
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
                color: '#CB9D1B',
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

export default OrderConfirmationPage;
