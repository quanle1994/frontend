import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import connect from "react-redux/es/connect/connect";
import { compose } from "redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { BACKEND_HOST } from "../../_api/constants";
import { history } from "../../_helpers/history";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    marginTop: 15,
    marginRight: 25,
    width: 29,
    height: 29
  },
  bigAvatar: {
    marginTop: 12,
    marginRight: 22,
    width: 35,
    height: 35
  }
};

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class ProfileIcon extends React.Component {
  render() {
    const { classes, currentPage, userProfile } = this.props;
    return (
      <div>
        {userProfile.photoDir !== undefined && userProfile.photoDir !== null && (
          <Avatar
            className={
              currentPage === "profilePage" ? classes.bigAvatar : classes.avatar
            }
            component={StyledLink}
            to="/homepage/profile"
          >
            {/* <img alt="Adelle Charles" className="logo" src="https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg?itok=Wskh0jNP" /> */}
            <img
              alt={userProfile.name}
              className="logo"
              src={`${BACKEND_HOST}${userProfile.photoDir}`}
            />
          </Avatar>
        )}
        {(userProfile.photoDir === undefined ||
          userProfile.photoDir === null) && (
          <AccountCircle
            className={
              currentPage === "profilePage" ? classes.bigAvatar : classes.avatar
            }
            onClick={() => history.push("/homepage/profile")}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPage: state.currentPage.page,
  userProfile: state.userProfile
});
export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ProfileIcon);
