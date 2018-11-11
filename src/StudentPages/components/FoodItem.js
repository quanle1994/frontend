import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TotalAmount from './TotalAmount';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';

const styles = {
  wrapper: {

  },
};

function FoodItem(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
        <div className="col-xs-2" >1x</div>
        <div className="col-xs-8" >Chicken Rice</div>
        <div className="col-xs-2" >$3.50</div>
      <TotalAmount/>
      <div className="col-xs-5"></div>
      <div className="col-xs-7">
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
          alignItems: 'center'
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
        >Order
        </Typography>
      </Button>
      </div>
    </div>



  );
}

export default withStyles(styles)(FoodItem);
