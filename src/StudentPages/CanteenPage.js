/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography/Typography';
import CanteenCard from './CanteenCard';
import { canteenActions } from '../_actions';
import { history } from '../_helpers/history';
import { SET_CURRENT_PAGE } from '../App';

class CanteenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { dispatch } = this.props;
    this.setState({}, () => dispatch({
      type: SET_CURRENT_PAGE,
      page: 0,
    }));
    dispatch(canteenActions.getAllCanteens());
  }

  onCanteenClick = (canteenId) => {
    // console.log('####clicked a canteen');
    history.push(`/homepage/store/${canteenId}`);
  };

  render() {
    const { canteens } = this.props;
    return (
      <div>
        <Typography
          variant="h3"
          style={{
            color: 'gray',
            marginTop: 20,
            marginLeft: '4vw',
          }}
        >Canteen
        </Typography>
        {canteens !== undefined && canteens.map(c => (
          <div className="col-xs-6" onClick={() => this.onCanteenClick(c.id)}>
            <CanteenCard canteen={c} />
          </div>
        )) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  canteens: state.canteens.canteens,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(CanteenPage);
