/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import Typography from '@material-ui/core/Typography/Typography';
import StoreCard from './StoreCard';
import { canteenActions, userActions } from '../_actions';

class CanteenStorePage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { arrayOfStores } = this.props;
    const storeCards = arrayOfStores.map(qoodieStore => {
      return (
          <StoreCard
            qoodieStore={qoodieStore}
            key={qoodieStore.id}
          />
      );
    });
    return (
      <div>
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
          }}
        >Store
        </Typography>
        {storeCards}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentCanteen } = state.canteens;
  const arrayOfStores = state.canteens.canteens[currentCanteen].stores;
  console.log(`########\n${JSON.stringify(arrayOfStores, undefined, 2)}`);
  return {
    arrayOfStores
  }
};

export default connect(mapStateToProps)(CanteenStorePage);
