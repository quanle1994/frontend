/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FoodItem from "./components/FoodItem";
import OrderConfirmationDialog from "./components/OrderConfirmationPage";
import TotalAmount from "./components/TotalAmount";

const styles = theme => ({
  root: {
    width: 375,
    paddingTop: 5
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function CartList(props) {
  const { classes, data, orderId } = props;
  if (!data) return null;
  const { orderDishes } = data;
  const canteens = {};
  orderDishes.map(od => {
    const canteen =
      canteens[`${od.dish.store.canteen.id}||${od.dish.store.id}`];
    if (canteen === undefined)
      canteens[`${od.dish.store.canteen.id}||${od.dish.store.id}`] = {
        orderDishes: []
      };
    canteens[
      `${od.dish.store.canteen.id}||${od.dish.store.id}`
    ].orderDishes.push(od);
    canteens[`${od.dish.store.canteen.id}||${od.dish.store.id}`].canteenName =
      od.dish.store.canteen.name;
    canteens[`${od.dish.store.canteen.id}||${od.dish.store.id}`].storeName =
      od.dish.store.name;
    return true;
  });
  console.log("TEST");
  console.log(canteens);
  const total = orderDishes
    .map(od => od.dish.price * od.amount)
    .reduce((a, b) => a + b, 0);
  const orderPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "SGD"
  }).format(total);
  return (
    <div className={classes.root}>
      <div>
        {Object.keys(canteens)
          .sort()
          .map((k, index) => {
            const length = 7;
            const l = 9;
            const { canteenName, storeName, orderDishes: ods } = canteens[k];
            const trimmedCanteenName =
              canteenName.length > l
                ? `${canteenName.substring(0, l - 3)}...`
                : canteenName;
            const trimmedDishName =
              storeName.length > length
                ? `${storeName.substring(0, length - 3)}...`
                : storeName;
            const t = ods
              .map(od => od.dish.price * od.amount)
              .reduce((a, b) => a + b, 0);
            const oPrice = new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "SGD"
            }).format(t);
            return (
              <ExpansionPanel>
                <ExpansionPanelSummary
                  className={classes.heading}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    style={{
                      fontSize: 20
                    }}
                  >
                    {trimmedCanteenName || "canteenName"}
                    :&nbsp;
                  </Typography>
                  <Typography
                    style={{
                      paddingLeft: 5,
                      fontSize: 20
                    }}
                  >
                    {trimmedDishName || "storeName"}
                  </Typography>
                  <Typography
                    style={{
                      marginLeft: 18,
                      fontSize: 20
                    }}
                  >
                    {oPrice}
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
                  <div>
                    {ods.map((orderDish, index) => (
                      <FoodItem
                        key={index}
                        data={orderDish}
                        orderId={orderId}
                      />
                    ))}
                    <TotalAmount key={index} dish={data} total={t} />
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
      </div>
      <div>
        <div
          className="col-xs-8"
          style={{
            marginTop: 15
          }}
        >
          <div className="col-xs-6">
            <Typography variant="h4">Total:&nbsp;</Typography>
          </div>
          <div className="col-xs-6">
            <Typography variant="h4">{orderPrice}</Typography>
          </div>
        </div>
        <OrderConfirmationDialog total={total} orderId={orderId} data={data} />
      </div>
    </div>
  );
}

export default withStyles(styles)(CartList);
