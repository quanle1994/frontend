import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';

import Remove from '@material-ui/icons/Remove';

const styles = theme => ({
  card: {
    width: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    height: 25,
  },
  content: {
    paddingTop: 0,
    textAlign: 'justify',
    align: 'center',
  },

});

class MenuCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      quantity: 0,
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { quantity } = this.state;
    const adjustQuantity = (value) => {
      this.setState({
        quantity: Math.max(0, quantity + value),
      })
    };
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="../../../img/kimchi_fried_rice.png"
          title="Kimchi Fried Rice"
        />
        <CardContent
          className={classes.content}
        >
          <Typography
            component="p"
            variant="h3"
            style={{
              fontSize: 15,
              display: 'inline-block',

            }}
          >
            Kimchi Fried Rice
          </Typography>
          <CardActions
            className={classes.actions} disableActionSpacing
            style={{
              display: 'inline-block',
              verticalAlign: 'baseline',
            }}
          >
            <IconButton aria-label="Add quantity" onClick={ () => adjustQuantity(1) }>
              <Add className={classes.icon} />
            </IconButton>
            <Typography
              component="p"
              variant="h3"
              style={{
                fontSize: 15,
                display: 'inline-block',
              }}
            >
              {quantity}
            </Typography>
            <IconButton aria-label="Minus quantity" onClick={ () => adjustQuantity(-1)} >
              <Remove className={classes.icon} />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

MenuCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuCard);
