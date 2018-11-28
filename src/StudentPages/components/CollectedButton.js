import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography/Typography';

class CollectedButton extends React.Component {
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
          // to={{
          //   pathname: './homepage',
          // }}
        >
          <Typography style={{
            fontSize: 15,
            color: '#DAA520',
          }}
          >Collected
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
                color: '#DAA520',
              }}
            >
              Confirm Collection
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
                borderColor: '#DAA520',
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
              }}>
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

export default CollectedButton;
