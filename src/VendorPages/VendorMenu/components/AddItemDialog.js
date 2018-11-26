/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
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
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import withStyles from '@material-ui/core/es/styles/withStyles';
import vendorApi from '../../../_api/vendors';
import ErrorDialog from '../../../_commons/ErrorDialog';
import { BACKEND_HOST, BACKEND_SERVER } from '../../../_api/constants';
import SuccessDialog from '../../../_commons/SuccessDialog';
import { history } from '../../../_helpers/index';
import { SET_CURRENT_PAGE } from '../../../App/index';
import { GET_VENDOR_DETAILS_SUCCESS } from '../VendorMenuPage';


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
      dishtypeOptions: [],
      dishType: -1,
    };
  }

  componentWillMount() {
    vendorApi.getAllDishTypes().then((response) => {
      this.setState({
        dishtypeOptions: response.data.map(d => ({
          value: d.id,
          label: d.name,
        })),
      });
    }).catch(error => ErrorDialog('loadding all dish types', error));
  }

  componentWillReceiveProps(nextProps) {
    const { menuItem } = nextProps;
    this.setState({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      photoDir: menuItem.photoDir,
    });
  }

  updateMenuItems = () => {
    const { dispatch } = this.props;
    vendorApi.getVendorDetails(JSON.parse(localStorage.getItem('user')).id)
      .then((response) => {
        dispatch({
          type: GET_VENDOR_DETAILS_SUCCESS,
          data: response.data,
        });
        localStorage.setItem('store', JSON.stringify(response.data));
      }).catch(error => ErrorDialog('retrieving vendor details', error));
    this.setState({}, () => dispatch({
      type: SET_CURRENT_PAGE,
      page: 0,
    }));
  };

  render() {
    const {
      openAddItemDialog, dispatch, fullScreen, menuItem, classes,
    } = this.props;
    const {
      name, price, dishtypeOptions, dishType, photoDir,
    } = this.state;
    const closeAddItemDialog = () => {
      this.setState({}, () => dispatch({
        type: CLOSE_ADD_ITEM_DIALOG,
      }));
    };
    const updateNewItem = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const addNewItem = () => {
      const {
        name: _name, price: _price, file, fileId, dishType: _dishType,
      } = this.state;
      const { vendorDetails } = this.props;
      const { vendorId, storeId } = vendorDetails;
      vendorApi.createNewItem(_name, _price, file, fileId, _dishType, vendorId, storeId)
        .then(() => {
          SuccessDialog('Create New Item Successfully', 'New item', 'created');
          closeAddItemDialog();
          this.updateMenuItems();
          history.push('/vendor/menu');
        }).catch(error => ErrorDialog('creating a new menu item', error));
    };
    const updateItem = () => {
      const {
        name: _name, price: _price, file, fileId, dishType: _dishType, id,
      } = this.state;
      const { vendorDetails } = this.props;
      const { vendorId, storeId } = vendorDetails;
      vendorApi.updateItem(id, _name, _price, file === '' ? null : file, fileId, _dishType, vendorId, storeId).then(() => {
        SuccessDialog('Update Menu Item Successfully', 'Menu item', 'updated');
        closeAddItemDialog();
        this.updateMenuItems();
        history.push('/vendor/menu');
      }).catch(error => ErrorDialog('updating menu item', error));
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
            {menuItem.name !== undefined ? 'Update Menu Item' : 'Add Menu Item'}
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
          <TextField
            select
            label={(
              <Typography
                style={{
                  fontSize: 15,
                  color: '#CB9D1B',
                }}
              >Dish Type
              </Typography>
            )}
            InputProps={{
              style: {
                fontSize: 15,
                marginTop: 20,
              },
            }}
            name="dishType"
            value={dishType}
            fullWidth
            onChange={updateNewItem}
          >
            {dishtypeOptions.map(d => (
              <MenuItem
                key={d.value}
                value={d.value}
                style={{
                  fontSize: 15,
                }}
              >{d.label}
              </MenuItem>
            ))}
          </TextField>
          {photoDir !== null ? (
            <div style={{
              textAlign: 'center',
              width: '100%',
              height: '80vw',
              marginTop: '20px',
              overflow: 'hidden',
            }}
            >
              <img className={classes.image} alt={name} src={`${BACKEND_HOST}${photoDir}`} />
            </div>
          ) : (
            <div>
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
                  url: `${BACKEND_SERVER}/vendors`,
                  process:
                    (fieldName, _file, metadata, load, error, progress, abort) => {
                      const formData = new FormData();
                      formData.append(fieldName, _file, _file.name);

                      const request = new XMLHttpRequest();
                      const url = `${BACKEND_SERVER}/vendors/uploadImage`;
                      request.open('POST', url);
                      request.upload.onprogress = (e) => {
                        progress(e.lengthComputable, e.loaded, e.total);
                      };
                      request.onload = () => {
                        if (request.status >= 200 && request.status < 300) {
                          this.setState({
                            fileId: request.responseText,
                            file: {
                              name: _file.name,
                              type: _file.type,
                              size: _file.size,
                            },
                          });
                          load(request.responseText);
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
                    onload: () => this.setState({ fileId: '', file: null }),
                    onerror: null,
                  },
                }}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            size="large"
            style={{
              borderColor: '#CB9D1B',
              backgroundColor: 'floralWhite',
              textTransform: 'none',
              textDecoration: 'none',
            }}
            onClick={menuItem.name !== undefined ? updateItem : addNewItem}
          >
            <Typography style={{
              fontSize: 15,
              color: '#CB9D1B',
            }}
            >
              {menuItem.name !== undefined ? 'Update' : 'Submit'}
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

const style = () => ({
  image: {
    width: '80vw',
  },
});

const mapStateToProps = state => ({
  openAddItemDialog: state.addItem.openAddItemDialog,
  menuItem: state.addItem.menuItem,
  vendorDetails: state.userProfile.vendorDetails,
});

export default compose(connect(mapStateToProps), withMobileDialog(), withStyles(style))(AddItemDialog);
