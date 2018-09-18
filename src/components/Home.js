import React from 'react';
import {Nav} from "../common/Nav";
import {connect} from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    console.log("Mount");
  }

  componentWillReceiveProps(props) {
    console.log("TEST");
  }

  render() {
    return(
      <div>
        <h1>Home</h1>
        <Nav/>
      </div>
    );
  }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Home);