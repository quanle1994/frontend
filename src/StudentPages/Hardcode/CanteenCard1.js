import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    width: '40vw',
    display: '-webkit-inline-box',
    marginTop: 20,

  },
  media: {
    height: '40vw',
  },
  wrapper: {
    width: '100%',
  },
};

function CanteenCard1(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="../../../img/fineFood.png"
            title="Fine Food"
          />
        </CardActionArea>
      </Card>
    </div>
  );
}

export default withStyles(styles)(CanteenCard1);
