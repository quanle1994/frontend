import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider/Divider';
import Button from '@material-ui/core/Button';

const styles = {
  wrapper: {
    width: 275,
    fontSize: 20,
  },
  listText: {
    fontSize:20,
  }
};

function BookmarkStores(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Button className={classes.listText}>
      <div className="col-xs-3" >
          Deck:
      </div>

      <div className="col-xs-9" >Roasted</div>
      </Button>
    </div>

  );
}

export default withStyles(styles)(BookmarkStores);