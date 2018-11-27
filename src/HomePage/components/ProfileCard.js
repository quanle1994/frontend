import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import connect from "react-redux/es/connect/connect";
import {compose} from "redux";

const styles = {
  card: {
    width: '40vw',
    display: '-webkit-inline-box',
    marginTop: 20,
  },
  media: {
    height: '40vw',
    border: '3px solid',
    borderColor: '#CB9D1B',
  },
  wrapper: {
    width: '100%',
  },
};

function ProfileCard(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg?itok=Wskh0jNP"
            title="Michelle Lee"
          />
        </CardActionArea>
      </Card>
    </div>
  );
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
});

export default compose(withStyles(styles), connect(mapStateToProps))(ProfileCard);
