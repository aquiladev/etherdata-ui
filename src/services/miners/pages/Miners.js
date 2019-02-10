import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';

import Notifier from './../../../components/Notifier';
import HomeNav from './../../../components/HomeNav';
import MinerStatView from './../components/MinerStatView';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4,
      padding: theme.spacing.unit * 3,
    },
  }
});

function Miners({ classes }) {
  return (
    <React.Fragment>
      <HomeNav />
      <Notifier />
      <Paper className={classes.paper}>
        <MinerStatView />
      </Paper>
    </React.Fragment>
  );
}

Miners.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Miners);