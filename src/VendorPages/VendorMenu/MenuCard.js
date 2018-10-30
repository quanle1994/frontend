import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Card from '@material-ui/core/Card/Card';
import Add from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core';
import {compose} from "redux";

export const OPEN_ADD_ITEM_DIALOG = 'OPEN_ADD_ITEM_DIALOG';

class MenuCard extends React.Component {
  render() {
    const { dispatch, classes } = this.props;
    const openAddItemDialog = () => {
      this.setState({}, () => dispatch({
        type: OPEN_ADD_ITEM_DIALOG,
      }));
    };
    return (
      <Card className={classes.card} onClick={openAddItemDialog}>
        <CardActionArea className={classes.media}>
          <Add className={classes.add} />
        </CardActionArea>
      </Card>
    );
  }
}

const styles = {
  card: {
    width: '40vw',
    marginLeft: '5vw',
    marginRight: '5vw',
    display: '-webkit-inline-box',
    marginTop: 20,
  },
  media: {
    height: '40vw',
    border: '3px solid',
    borderColor: '#CB9D1B',
    textAlign: 'center',
  },
  add: {
    fontSize: '30vw',
    color: 'lightgray',
  },
};

const mapStateToProps = state => ({});

export default compose(withStyles(styles),connect(mapStateToProps))(MenuCard);
