import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FoodItem from './components/FoodItem';
import TotalAmount from './components/TotalAmount';


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

function CartList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          className={classes.heading}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            style={{
              fontSize: 20,
            }}
          >
            Deck:
          </Typography>
          <Typography
            style={{
              paddingLeft: 5,
              fontSize: 20,
            }}
          >
            Roasted
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FoodItem/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

CartList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartList);
