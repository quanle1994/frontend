import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import Card from '@material-ui/core/Card/Card';
import Add from '@material-ui/icons/Add';
import CameraAlt from '@material-ui/icons/CameraAlt';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import CardContent from '@material-ui/core/CardContent/CardContent';
import { BACKEND_HOST } from '../../../_api/constants';

export const OPEN_ADD_ITEM_DIALOG = 'OPEN_ADD_ITEM_DIALOG';

class MenuCard extends React.Component {
  render() {
    const { dispatch, classes, item } = this.props;
    const openAddItemDialog = (menuItem) => {
      this.setState({}, () => dispatch({
        type: OPEN_ADD_ITEM_DIALOG,
        menuItem,
      }));
    };
    return (
      <Card className={classes.card}>
        {item !== undefined && (
          <CardActionArea className={classes.media} onClick={() => openAddItemDialog(item)}>
            {item.photoDir === null ? (
              <CameraAlt className={classes.add} />
            ) : (
              <img height="100%" alt={item.name} src={`${BACKEND_HOST}${item.photoDir}`} />
            )}
            <CardContent className={classes.label}>{item.name}</CardContent>
          </CardActionArea>
        )}
        {item === undefined && (
          <CardActionArea className={classes.media} onClick={openAddItemDialog}>
            <Add className={classes.add} />
          </CardActionArea>
        )}
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
    position: 'relative',
  },
  media: {
    height: '40vw',
    border: '3px solid',
    borderColor: '#CB9D1B',
    textAlign: 'center',
  },
  label: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '5px !important',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
  },
  add: {
    fontSize: '30vw',
    color: 'lightgray',
  },
};

const mapStateToProps = state => ({});

export default compose(withStyles(styles), connect(mapStateToProps))(MenuCard);
