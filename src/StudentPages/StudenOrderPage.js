/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import MenuCard from './MenuCard';
import Button from '@material-ui/core/Button/Button';

class StudentOrderPage extends React.Component {
  render() {
    return (
      <div>
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
            marginBottom: 20,
          }}
        >Korean
        </Typography>
        <MenuCard/>
        <div style={{
          paddingTop: 10,
        }}
        >
        <div className="col-xs-4"></div>
        <div className="col-xs-8">
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
            //onClick={openConfirmationDialog}
            // to={{
            //   pathname: './homepage',
            // }}
          >
            <Typography style={{
              fontSize: 15,
              color: '#CB9D1B',
            }}
            >Add To Cart
            </Typography>
          </Button>
        </div>
        </div>
      </div>
    );
  }
}

export default connect()(StudentOrderPage);
