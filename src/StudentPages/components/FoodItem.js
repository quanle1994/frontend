/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider/Divider';
import OrderItems from './OrderItems';

const styles = {
  wrapper: {
    width: '100%',
    boxSizing: 'border-box',
  },
};

function FoodItem(props) {
  const { classes, data } = props;
  if (!data) return null;
  // console.log(`******order:\n${JSON.stringify(data, undefined, 2)}`);

  return (
    <div className={classes.wrapper}>
      <div style={{
        overflow: 'hidden',
        paddingBottom: 10,
        paddingTop: 10,
      }}
      >
        <OrderItems dish={data} />
      </div>
      <Divider />
    </div>
  );
}

export default withStyles(styles)(FoodItem);
