/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import CanteenCard from './CanteenCard';
import CanteenCard1 from './Hardcode/CanteenCard1';
import CanteenCard2 from './Hardcode/CanteenCard2';
import { userActions } from '../_actions';

class CanteenMenuPage extends React.Component {

  render() {
    return (
      <div>
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
          }}
        >Canteen
        </Typography>
        <div className="col-xs-6" ><CanteenCard/></div>
        <div className="col-xs-6" ><CanteenCard1/></div>
        <div className="col-xs-6" ><CanteenCard2/></div>
      </div>
    );
  }
}

export default connect()(CanteenMenuPage);
