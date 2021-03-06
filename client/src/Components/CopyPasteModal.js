import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid"
import API from "../utils/API"
import '../App.css';


function getModalStyle() {
  const top = 20;
  const left = 20;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class CopyPasteModal extends React.Component {
  state = {
    open: false,
    description: "",
    title: "",
    resumeBody: "",
  };

  handleSubmit = event=>{
    event.preventDefault();
    if(!this.state.resumeBody){
      alert("You can't save a blank resume!");
    } else{
      console.log(this.props.user)
      API.addResume({
        title: this.state.title, 
        description:this.state.description,
        body: this.state.resumeBody,
        user: this.props.user,
        date: Date.now
      })
      .then(resp=>{
        console.log(resp)
        if(resp.status===200){
            console.log("resume added!")
        //   this.props.history.push("/main")
        }
      })

      .catch(err=>console.log(err));
      this.setState({
        description:"",
        title:"",
        resumeBody:"",
      })
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="contained"
          // variant="outlined"
          // background-color="black"
          className="primaryButton"
          font-weight="bold"
           color="primary"
         
          height="40px"
  
        
          onClick={this.handleOpen}>Copy / Paste resume here</Button>
        <Modal
          aria-labelledby="title"
          aria-describedby="modal-body"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Grid container spacing={8} alignItems="flex-end" >
              <Grid item sm={12}>
                <FormControl>
                  <InputLabel htmlFor="title">Title or Company</InputLabel>
                  <Input fullWidth value={this.state.title} onChange = { this.handleInputChange } id="title" name="title" />
                </FormControl>
              </Grid>
              <Grid item sm={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="description">Description</InputLabel>
                  <Input fullWidth value={this.state.description} onChange = { this.handleInputChange } id="description" name="description" />
                </FormControl>
              </Grid>

              <Grid item md={12}>
                <form>
                  <Typography component="label" variant="h7" align="center" >
                    Paste resume below, exclude name and contact information 
                  </Typography>
                  <textarea name="resumeBody" rows="20" cols="31" value={this.state.resumeBody} onChange={this.handleInputChange} >
                  </textarea>
                </form>
              </Grid>

              <Grid item md={12}> 
                <Button
                  
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick = { this.handleSubmit }
                >
                  Save
                </Button>
              </Grid>
              <Grid item md={12}>
                <Button 
                  variant="outlined"
                  onClick={this.handleClose} 
                  fullWidth
                  color="primary">
                  Close
                </Button>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

CopyPasteModal.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CopyPasteModal);