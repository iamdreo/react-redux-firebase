import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/LockRounded';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
       


    PaperStyle: {
    
    [theme.breakpoints.down('sm')]: {
     
     width: '100%',
    marginTop: '53%',
    textAlign: 'center',
   
    height: '300px'

     

    },
    [theme.breakpoints.up('md')]: {
      
       width: '30%',
    marginTop: '15%',
    textAlign: 'center',
    marginLeft: '35%',
    height: '300px'
    },
    [theme.breakpoints.up('lg')]: {
     
     width: '30%',
    marginTop: '15%',
    marginBottom:'15%',
    textAlign: 'center',
    marginLeft: '35%',
    height: '300px'
    },
  },

});




class SignupPage extends Component {
  state = {
    email: '',
    password: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
   
  
  render() {
    const { authError, auth } = this.props;
    const { classes } = this.props;

     return (
      <div >

     <Grid container>
      <Paper className={ classes.PaperStyle }
    elevation={0} >

    <Grid item xs={12}>
          

        <h1 > Sign up </h1>
        <p>Already have an account? <Button color="primary" href="login">Sign in</Button></p> 

       
      </Grid>

      <form  noValidate autoComplete="off" onSubmit={this.handleSubmit}>

        <Grid item >
        <TextField
          id="email"
          label="Email"
          onChange={this.handleChange}
          margin="normal"
          input type="email"
          style={{marginTop: '7%'}}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        />
        </Grid>
          <Grid item>
          <TextField
          id="password"
          label="Password"
          onChange={this.handleChange}
          margin="normal"
          input type="password"
          
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
        />
        </Grid>
          
         <div style={{marginTop: '5%'}}>
            <Button variant="contained" color="primary" type='submit'>Login</Button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
           
            </form>
             </Paper>
             </Grid>
             </div>
    );
  }
}
 

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignupPage));
