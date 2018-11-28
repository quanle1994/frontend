/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import TotalAmount from "./TotalAmount";
import OrderItems from "./OrderItems";
import CollectionStore from "./CollectionStore";

const styles = {
  wrapper: {}
};

function OrderDetails(props) {
  const { classes, order } = props;
  const dishes = order.orderDishes.map((dish, index) => (
    <div
      style={{
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      <Divider key={index} />
      <div
        style={{
          paddingTop: 10,
          overflow: "hidden",
          width: "100%"
        }}
      >
        <Typography
          key={index}
          variant="h5"
          style={{
            color: "#CB9D1B"
          }}
        >
          {dish.dish.name}
        </Typography>
      </div>
      <div
        style={{
          overflow: "hidden"
        }}
      >
        <OrderItems key={index} dish={dish} />
      </div>
    </div>
  ));
  const total = order.orderDishes
    .map(o => o.amount * o.dish.price)
    .reduce((a, b) => a + b, 0);
  return (
    <div className={classes.wrapper}>
      <CollectionStore order={order} />
      <div className="col-xs-1" />
      <div className="col-xs-11">{dishes}</div>
      <div>
        <TotalAmount total={total} />
      </div>
    </div>
  );
}

export default withStyles(styles)(OrderDetails);
