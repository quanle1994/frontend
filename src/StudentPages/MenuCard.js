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
import Button from '@material-ui/core/Button/Button';
import { history } from '../_helpers';
import { canteenConstants } from '../_constants';
import config from 'config';



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

    const currentStore = JSON.parse(localStorage.getItem('currentStore'));
    const { dishes } = currentStore;
    console.log(`#####dishes:\n${JSON.stringify(dishes,undefined,2)}`);

    const dishCards = dishes.map(dish => {
      return (
        <Card className={classes.card} key={dish.id}>
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
              {dish.name}
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
                  alignItems: 'center',
                }}
                onClick={() => {
                  const {token} = JSON.parse(localStorage.getItem('user'));
                  const requestOptions = {
                    method: 'POST',
                    headers: {
                      Authorization: token,
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      amount: this.state.quantity,
                      dish: {
                        description: dish.description,
                        id: dish.id,
                        isAvailable: dish.isAvailable,
                        name: dish.name,
                        price: dish.price,
                        store: {
                          id: currentStore.id,
                          name: currentStore.name
                        },
                      }
                    })
                  };

                  console.log(`###Printing the order request:\n${JSON.stringify(requestOptions, undefined, 2)}`);
                  fetch(`${config.apiUrl}/Resource/orderDishes`, requestOptions)
                    .then(
                      response => response.json(),

                      error => error
                    );
                  history.push('/homepage/cart');
                }}
              >
                <Typography style={{
                  fontSize: 15,
                  color: '#CB9D1B',
                }}
                >Add To Cart
                </Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      );
    });

    return (
      <div>
        {dishCards}
      </div>
    );
  }
}

MenuCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuCard);
