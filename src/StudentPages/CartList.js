import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FoodItem from './components/FoodItem';

const styles = theme => ({
  root: {
    width: 375,
    paddingTop: 5,

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,

  },
});

function CartList(props) {
  const { classes, data, orderId } = props;
  if (!data) return null;
  // dirty
  const totalPrice = 0;
  const { orderDishes } = data;
  const canteenName = orderDishes[0].dish.store.canteen.name;
  const storeName = orderDishes[0].dish.store.name;

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          className={classes.heading}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            style={{
              fontSize: 20,
            }}
          >
            {canteenName || 'canteenName'}:&nbsp;
          </Typography>
          <Typography
            style={{
              paddingLeft: 5,
              fontSize: 20,
            }}
          >
            {storeName || 'storeName'}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <div className={classes.wrapper}> */}
          {/* <OrderItems data={data}/> */}
          {/* <TotalAmount total={total} /> */}
          {/* <div className="col-xs-5"></div> */}
          {/* <div className="col-xs-7"> */}
          {/* <OrderConfirmationDialog total={total} orderId={orderId} data={data}/> */}
          {/* </div> */}
          {/* </div> */}
          {orderDishes ? orderDishes.map(orderDish => (
            <FoodItem
              key={orderDish.dish.id}
              data={orderDish}
              total={totalPrice}
              orderId={orderId}
            />
          )) : ''}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(CartList);
