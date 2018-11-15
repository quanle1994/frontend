/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import TextField from '@material-ui/core/TextField/TextField';
import withStyles from '@material-ui/core/es/styles/withStyles';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import api from '../_api/vendors';
import { history } from '../_helpers';
import {SET_CURRENT_PAGE} from "../App";

class RegisterVendorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
      confirmPassword: '',
      storeName: '',
      canteen: '',
      canteenOptions: [],
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    api.getAllCanteens().then(response => this.setState({
      canteenOptions: response.data.map(canteen => ({
        value: canteen.id,
        label: canteen.name,
      })),
    }));
  }

  render() {
    const {
      canteen, canteenOptions, emailAddress, password, confirmPassword, storeName,
    } = this.state;
    const { classes, dispatch } = this.props;
    const updateField = (e) => {
      const field = e.target.name;
      let value = e.target.value;
      if (field === 'username') {
        value = value.replace(' ', '');
      }
      this.setState({ [field]: value });
    };
    const registerVendor = () => {
      const data = this.state;
      delete data.canteenOptions;
      delete data.confirmPassword;
      api.createVendor(data).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        this.setState({}, () => dispatch({
          type: SET_CURRENT_PAGE,
          page: 0,
        }));
        history.push('/homepage/vendor');
      }).catch();
    };
    return (
      <div
        className="container-fluid"
        style={{
          width: '100vw',
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <div
          className="row"
          style={{
            textAlign: 'center',
          }}
        >
          <img
            alt="Qoodie"
            src="../../img/logo_background.png"
            style={{
              width: '50%',
              marginTop: 40,
              marginBottom: 40,
            }}
          />
        </div>
        <TextField
          label={(
            <Typography
              style={{
                fontSize: 20,
                color: '#CB9D1B',
              }}
            >Email Address
            </Typography>
          )}
          fullWidth
          style={{
            height: 60,
          }}
          InputProps={{
            style: {
              fontSize: 20,
              marginTop: 20,
            },
          }}
          value={emailAddress}
          name="emailAddress"
          onChange={updateField}
        />
        <TextField
          type="password"
          label={(
            <Typography
              style={{
                fontSize: 20,
                color: '#CB9D1B',
              }}
            >Password
            </Typography>
          )}
          fullWidth
          style={{
            height: 60,
          }}
          InputProps={{
            style: {
              fontSize: 20,
              marginTop: 20,
            },
          }}
          name="password"
          value={password}
          onChange={updateField}
        />
        <TextField
          type="password"
          label={(
            <Typography
              style={{
                fontSize: 20,
                color: '#CB9D1B',
              }}
            >Confirm Password
            </Typography>
          )}
          fullWidth
          style={{
            height: 60,
          }}
          InputProps={{
            style: {
              fontSize: 20,
              marginTop: 20,
            },
          }}
          name="confirmPassword"
          value={confirmPassword}
          onChange={updateField}
        />
        <TextField
          label={(
            <Typography
              style={{
                fontSize: 20,
                color: '#CB9D1B',
              }}
            >Store Name
            </Typography>
          )}
          fullWidth
          style={{
            height: 60,
          }}
          InputProps={{
            style: {
              fontSize: 20,
              marginTop: 20,
            },
          }}
          name="storeName"
          value={storeName}
          onChange={updateField}
        />
        <TextField
          label={(
            <Typography
              style={{
                fontSize: 20,
                color: '#CB9D1B',
              }}
            >Canteen
            </Typography>
          )}
          fullWidth
          style={{
            height: 60,
          }}
          select
          InputProps={{
            style: {
              fontSize: 20,
              marginTop: 20,
            },
          }}
          name="canteen"
          value={canteen}
          onChange={updateField}
        >
          {canteenOptions.map(canteenOption => (
            <MenuItem
              className={classes.menu}
              key={canteenOption.value}
              value={canteenOption.value}
            >
              {canteenOption.label}
            </MenuItem>
          ))}
        </TextField>
        <div style={{
          textAlign: 'center',
        }}
        >
          <Button
            variant="outlined"
            size="large"
            style={{
              marginTop: 20,
              borderColor: '#CB9D1B',
              backgroundColor: 'floralWhite',
              marginBottom: 20,
              textTransform: 'none',
              textDecoration: 'none',
            }}
            onClick={registerVendor}
          >
            <Typography style={{
              fontSize: 20,
              color: '#CB9D1B',
            }}
            >Start Cooking
            </Typography>
          </Button>
        </div>
      </div>
    );
  }
}

const styles = () => ({
  menu: {
    fontSize: '1.5em !important',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ dispatch });

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(RegisterVendorPage);
