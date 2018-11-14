import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography/Typography';

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

  render() {
    return (
      <div>

        <Button
          variant="outlined"
          size="small"
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
          // to={{
          //   pathname: './homepage',
          // }}
        >
          <Typography style={{
            fontSize: 15,
            color: '#CB9D1B',
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
            id="alert-dialog-title">
            <Typography
              variant="h4"
              style={{
                color: '#CB9D1B',
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
            }}>
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
              }}>
              <Typography style={{
                fontSize: 15,
                color: '#CB9D1B',
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
                borderColor: '#CB9D1B',
                backgroundColor: 'floralWhite',
                textTransform: 'none',
                textDecoration: 'none',
                justifyItems: 'center',
                alignItems: 'center',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}>
              <Typography style={{
                fontSize: 15,
                color: '#CB9D1B',
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

export default VendorConfirmOrderReadyDialog;
