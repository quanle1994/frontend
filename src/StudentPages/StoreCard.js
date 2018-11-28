import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Bookmark from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import { compose } from "redux";
import connect from "react-redux/es/connect/connect";
import { history } from "../_helpers";
import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK
} from "../_reducers/userProfile.reducer";

const styles = {
  card: {
    width: "100%",
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  content: {
    paddingTop: 0,
    textAlign: "justify",
    align: "center"
  },
  actions: {
    display: "flex",
    height: 25
  },
  iconAdded: {
    color: "#DAA520"
  }
};

class StoreCard extends React.Component {
  handleBookmark = () => {
    const { dispatch, bookmark, qoodieStore } = this.props;
    const l = bookmark.filter(b => b.id === qoodieStore.id).length;
    console.log(bookmark);
    if (l > 0) {
      dispatch({
        type: REMOVE_BOOKMARK,
        bookmark: bookmark.filter(b => b.id !== qoodieStore.id)
      });
    } else {
      bookmark.push(qoodieStore);
      dispatch({
        type: ADD_BOOKMARK,
        bookmark
      });
    }
  };

  render() {
    const { classes, qoodieStore, canteen, bookmark } = this.props;
    // console.log(`####store:\n${JSON.stringify(qoodieStore, undefined, 2)}`);
    const bm = bookmark.filter(b => b.id === qoodieStore.id)[0];
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="../../../img/ytf.png"
            title="Store"
            onClick={() => {
              localStorage.setItem("currentStore", JSON.stringify(qoodieStore));
              history.push(`/homepage/menu/${canteen.id}/${qoodieStore.id}`);
            }}
          />
        </CardActionArea>
        <CardContent className={classes.content}>
          <Typography
            component="p"
            variant="h3"
            style={{
              fontSize: 20,
              display: "inline-block"
            }}
          >
            {qoodieStore.name}
          </Typography>
          <CardActions
            className={classes.actions}
            disableActionSpacing
            style={{
              display: "inline-block"
            }}
          >
            <IconButton aria-label="Bookmark">
              <Bookmark
                className={bm === undefined ? classes.icon : classes.iconAdded}
                onClick={this.handleBookmark}
              />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  bookmark: state.userProfile.bookmark
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(StoreCard);
