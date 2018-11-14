import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Bookmark from '@material-ui/icons/Bookmark';
import IconButton from '@material-ui/core/IconButton';
import { history } from '../_helpers';
import { canteenConstants } from '../_constants';

import MenuCard from './MenuCard';

const styles = {
  card: {
    width: 400,
    paddingTop: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    paddingTop: 0,
    textAlign: 'justify',
    align: 'center',
  },
  actions: {
    display: 'flex',
    height: 25,
  },
};

function StoreCard(props) {
  const { classes, qoodieStore } = props;
  console.log(`####store:\n${JSON.stringify(qoodieStore,undefined,2)}`);





  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../../../img/kimchi_fried_rice.png"
          title="Store"
          onClick={() => {
            localStorage.setItem('currentStore', JSON.stringify(qoodieStore));

            history.push('/homepage/menu');
          }}
        />
      </CardActionArea>
      <CardContent className={classes.content}>
      <Typography
        component="p"
        variant="h3"
        style={{
          fontSize: 20,
          display: 'inline-block',
        }}>
        {qoodieStore.name}
      </Typography>
      <CardActions
        className={classes.actions} disableActionSpacing
        style={{
          display: 'inline-block',
        }}>
        <IconButton
          aria-label="Bookmark"
        >
          <Bookmark className={classes.icon} />
        </IconButton>
      </CardActions>
      </CardContent>
    </Card>
  );
}

StoreCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StoreCard);
