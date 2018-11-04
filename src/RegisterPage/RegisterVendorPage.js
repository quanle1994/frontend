/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import TextField from '@material-ui/core/TextField/TextField';
import withStyles from '@material-ui/core/es/styles/withStyles';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import Link from "react-router-dom/es/Link";

class RegisterVendorPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="container-fluid">
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
                fontSize: 25,
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
              fontSize: 25,
              marginTop: 20,
            },
          }}
        />
        <TextField
          label={(
            <Typography
              style={{
                fontSize: 25,
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
              fontSize: 25,
              marginTop: 20,
            },
          }}
        />
        <TextField
          type="password"
          label={(
            <Typography
              style={{
                fontSize: 25,
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
              fontSize: 25,
              marginTop: 20,
            },
          }}
        />
        <div style={{
          textAlign: 'center',
        }}
        >
          <Button
            variant="outlined"
            size="large"
            component={Link}
            style={{
              marginTop: 50,
              borderColor: '#CB9D1B',
              backgroundColor: 'floralWhite',
              marginBottom: 50,
              textTransform: 'none',
              textDecoration: 'none',
            }}
            onClick={() => {}}
            to={{
              pathname: './homepage',
            }}
          >
            <Typography style={{
              fontSize: 25,
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
