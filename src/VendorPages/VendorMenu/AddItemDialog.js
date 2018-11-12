/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

export const CLOSE_ADD_ITEM_DIALOG = 'CLOSE_ADD_ITEM_DIALOG';

class AddItemDialog extends React.Component {
  render() {
    const { openAddItemDialog, dispatch } = this.props;
    const closeAddItemDialog = () => {
      this.setState({}, () => dispatch({
        type: CLOSE_ADD_ITEM_DIALOG,
      }));
    };
    return (
      <Dialog
        open={openAddItemDialog}
        fullWidth
        onClose={closeAddItemDialog}
        classes={{
          root: {
            margin: '20 !important',
          },
        }}
      >
        <DialogTitle>
          <Typography
            variant="h3"
            style={{
              color: '#CB9D1B',
            }}
          >
            Add Menu Item
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            label={(
              <Typography
                style={{
                  fontSize: 15,
                  color: '#CB9D1B',
                }}
              >Name
              </Typography>
            )}
            fullWidth
            InputProps={{
              style: {
                fontSize: 15,
                marginTop: 20,
              },
            }}
          />
          <TextField
            label={(
              <Typography
                style={{
                  fontSize: 15,
                  color: '#CB9D1B',
                }}
              >Price
              </Typography>
            )}
            fullWidth
            InputProps={{
              style: {
                fontSize: 15,
                marginTop: 20,
              },
            }}
          />
          <TextField
            label={(
              <Typography
                style={{
                  fontSize: 15,
                  color: '#CB9D1B',
                }}
              >Photo
              </Typography>
            )}
            fullWidth
            InputProps={{
              style: {
                fontSize: 15,
                marginTop: 20,
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            size="large"
            // component={Link}
            style={{
              borderColor: '#CB9D1B',
              backgroundColor: 'floralWhite',
              textTransform: 'none',
              textDecoration: 'none',
            }}
            onClick={closeAddItemDialog}
            // to={{
            //   pathname: './homepage',
            // }}
          >
            <Typography style={{
              fontSize: 15,
              color: '#CB9D1B',
            }}
            >Submit
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  openAddItemDialog: state.addItem.openAddItemDialog,
});

export default connect(mapStateToProps)(AddItemDialog);
