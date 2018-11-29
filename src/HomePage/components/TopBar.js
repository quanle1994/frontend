import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ProfileIcon from "./ProfileIcon";
import connect from "react-redux/es/connect/connect";

const styles = {
  appBar: {
    backgroundColor: "#DAA520",
    position: "relative",
    marginTop: "-1.2vw",
    height: 50
  },
  title: {
    position: "absolute",
    width: "calc(100% - 38px)",
    textAlign: "center"
  },
  logo: {
    width: "100%",
    textAlign: "left"
  },
  profile: {
    position: "absolute",
    top: 0,
    right: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "loading"
    };
  }

  componentWillMount() {
    const { title } = this.props;
    this.setState({
      titleValue: title
    });
  }

  componentWillReceiveProps(nextProps) {
    const { title } = nextProps;
    this.setState({
      titleValue: title
    });
  }

  render() {
    const { classes } = this.props;
    const { titleValue } = this.state;

    const handleChange = (event, newTitle) => {
      this.setState({ titleValue: newTitle });
    };

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          onChange={handleChange}
          className={classes.appBar}
        >
          <Toolbar>
            <div className={classes.logo}>
              <img
                alt="Qoodie"
                className="logo"
                src="../../../img/grey2.png"
                style={{
                  padding: 4,
                  height: 38
                }}
              />
            </div>
            <div className={classes.title}>
              <Typography variant="h3" style={{ color: "white" }}>
                {`${titleValue}`}
              </Typography>
            </div>
            <div className={classes.profile}>
              <ProfileIcon />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.currentTitle.title
});

export default connect(mapStateToProps)(withStyles(styles)(TopBar));
