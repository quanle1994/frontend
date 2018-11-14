/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import Link from 'react-router-dom/es/Link';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import withMobileDialog from '@material-ui/core/es/withMobileDialog/withMobileDialog';
import { compose } from 'redux';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import api from "../../_api/vendors";


export const CLOSE_ADD_ITEM_DIALOG = 'CLOSE_ADD_ITEM_DIALOG';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,
  FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

class AddItemDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      file: '',
    };
  }


  render() {
    const { openAddItemDialog, dispatch, fullScreen } = this.props;
    const { name, price } = this.state;
    const closeAddItemDialog = () => {
      this.setState({}, () => dispatch({
        type: CLOSE_ADD_ITEM_DIALOG,
      }));
    };
    const updateNewItem = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const addNewItem = () => {
      const { name: _name, price: _price, file } = this.state;
      api.createNewItem(_name, _price, file).then(() => closeAddItemDialog());
    };
    return (
      <Dialog
        fullScreen={fullScreen}
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
            id="name"
            name="name"
            value={name}
            InputProps={{
              style: {
                fontSize: 15,
                marginTop: 20,
              },
            }}
            type="text"
            onChange={updateNewItem}
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
            id="price"
            name="price"
            value={price}
            fullWidth
            InputProps={{
              style: {
                fontSize: 15,
                marginTop: 20,
              },
            }}
            type="number"
            onChange={updateNewItem}
          />
          <InputLabel>
            <Typography
              style={{
                fontSize: 15,
                color: '#CB9D1B',
                marginTop: 20,
              }}
            >Photo
            </Typography>
          </InputLabel>
          <FilePond
            ref={ref => this.pond = ref}
            allowMultiple
            maxFiles={1}
            maxFileSize="10MB"
            acceptedFileTypes={['image/*']}
            server={{
              url: 'http://172.19.195.190:8080/Qoodie-war/Resource/vendors',
              process:
                (fieldName, _file, metadata, load, error, progress, abort) => {
                  const formData = new FormData();
                  formData.append(fieldName, _file, _file.name);

                  const request = new XMLHttpRequest();
                  const url = 'http://172.19.195.190:8080/Qoodie-war/Resource/vendors/uploadImage';
                  request.open('POST', url);
                  request.upload.onprogress = (e) => {
                    progress(e.lengthComputable, e.loaded, e.total);
                  };
                  request.onload = () => {
                    if (request.status >= 200 && request.status < 300) {
                      load(request.responseText);
                      this.setState({ file: request.responseText });
                    } else {
                      error('oh no');
                    }
                  };

                  request.send(formData);

                  // Should expose an abort method so the request can be cancelled
                  return {
                    abort: () => {
                      request.abort();
                      abort();
                    },
                  };
                },
              revert: {
                url: '/revertImage',
                method: 'POST',
                withCredentials: false,
                // headers: {},
                timeout: 7000,
                onload: () => this.setState({ file: '' }),
                onerror: null,
              },
            }}
            // oninit={() => this.handleInit()}
            // onupdatefiles={(fileItems) => {
            //
            // }}
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
            onClick={addNewItem}
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
            >Cancel
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

export default compose(connect(mapStateToProps), withMobileDialog())(AddItemDialog);
