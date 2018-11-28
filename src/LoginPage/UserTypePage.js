/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';

class UserTypePage extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3" align="center">
        <img
          alt="Qoodie"
          src="../../img/logo_background.png"
          style={{
            width: '100%',
          }}
        />
        <Typography
          variant="h2"
          style={{
            marginTop: 40,
            color: '#DAA520',
          }}
        >I am a ...
        </Typography>
        <div style={{
          marginTop: 30,
        }}>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            style={{
              borderColor: '#DAA520',
              width: 140,
              height: 140,
              textTransform: 'none',
              backgroundColor: 'floralWhite',
              marginRight: 5,
            }}
            onClick={() => {}}
            to={{
              pathname: '/registerStudent',
            }}
          >
            <Typography
              variant="h4"
              style={{
                color: '#DAA520',
              }}
            >Student
            </Typography>
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            style={{
              borderColor: '#DAA520',
              width: 140,
              height: 140,
              textTransform: 'none',
              backgroundColor: 'floralWhite',
              marginLeft: 5,
            }}
            onClick={() => {}}
            to={{
              pathname: '/registerVendor',
            }}
          >
            <Typography
              variant="h4"
              style={{
                color: '#DAA520',
              }}
            >Vendor
            </Typography>
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(UserTypePage);
