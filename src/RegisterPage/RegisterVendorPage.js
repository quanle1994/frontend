/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import TextField from '@material-ui/core/TextField/TextField';
import withStyles from '@material-ui/core/es/styles/withStyles';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import api from '../_api/vendors';
import { history } from '../_helpers';

class RegisterVendorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      emailAddress: '',
      password: '',
      storeName: '',
      canteen: '',
    };
  }


  render() {
    const { classes } = this.props;
    const updateField = (e) => {
      const field = e.target.name;
      let value = e.target.value;
      if (field === 'username') {
        value = value.replace(' ', '');
      }
      this.setState({ [field]: value });
    };
    const registerVendor = () => {
      api.createVendor(this.state).then((response) => {
        console.log(response.data);
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
          autoFocus
          label={(
            <Typography
              style={{
                fontSize: 20,
                color: '#CB9D1B',
              }}
            >User Name
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
          name="username"
          onChange={updateField}
        />
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
          InputProps={{
            style: {
              fontSize: 20,
              marginTop: 20,
            },
          }}
          name="canteen"
          onChange={updateField}
        />
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

const styles = () => ({});

export default compose(withStyles(styles), connect())(RegisterVendorPage);
