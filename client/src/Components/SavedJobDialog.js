import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
// import UnsaveButton from "./UnsaveButton"



class MaxWidthDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          View Posting
        </Button>

      
        <Dialog
          fullWidth="true"
          maxWidth="xl"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">
            title
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              content/job description
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <UnsaveButton 
                user = {this.props.user} color="primary" jobInfo = {this.props.jobInfo}>
             Remove!
              </UnsaveButton> */}
            <Button onClick={this.calculateAlgo} color="primary">
              Scrybe
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
           
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

MaxWidthDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (MaxWidthDialog);
