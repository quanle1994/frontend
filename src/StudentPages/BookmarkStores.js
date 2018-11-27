/* eslint-disable react/jsx-one-expression-per-line */
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
  },
};

function BookmarkStores(props) {
  const { classes, store } = props;
  return (
    <div className={classes.wrapper}>
      <Button className={classes.listText}>
        <div className="col-xs-3" style={{fontSize:17,}}>{store.canteenName}:</div>
          <div className="col-xs-1"></div>
        <div className="col-xs-8" style={{fontSize:15,}}>
            {store.name}
            </div>
      </Button>
    </div>

  );
}

export default withStyles(styles)(BookmarkStores);
