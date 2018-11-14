import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OrderDetails from './components/OrderDetails';

const styles = theme => ({
  root: {
    width: 375,
    paddingTop: 5,

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,

  },
});

function TrackOrderList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          className={classes.heading}
          expandIcon={<ExpandMoreIcon />}
        >
          <div className="col-xs-7">
          <Typography
            style={{
              fontSize: 20,
            }}>
            2372836
          </Typography>
          </div>
          <div className="col-xs-5">
          <Typography
            style={{
              paddingLeft: 5,
              fontSize: 20,
            }}>
            Preparing
          </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <OrderDetails/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

TrackOrderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrackOrderList);
