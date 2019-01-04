import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import './signup.css';




class TextFields extends React.Component {
  constructor(props) {
    super(props);


  this.state = {
    email: '',
    password:'',
    firstname: '',
    lastname: '',
    company: '',
    industry: '',
    
  }

   this.handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  this.handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  } 

  render() {
   
    const { auth, authError } = this.props;
    

    return (

      <form classname="signup-form" noValidate autoComplete="on" onSubmit={this.handleSubmit}>
        <TextField
          required
          id="firstName"
          label="FirstName"
          defaultValue="First Name"          
          style={{marginLeft:'10px',marginRight:'10px'}}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

         <TextField  
         
          required
          
          id="lastName"
          label="LastName"
          defaultValue="Last Name"
          style={{marginLeft:'10px',marginRight:'10px'}}         
         onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

           <TextField
          style={{marginLeft:'10px',marginRight:'10px'}}
          required
          id="company"
          label="Company"
          defaultValue="Company"
          style={{marginLeft:'10px',marginRight:'10px'}}
          
         onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        
        <TextField
          required
          id="industry"
          label="Industry"
          defaultValue="Industry"
         style={{marginLeft:'10px',marginRight:'10px'}}
          
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
       
        <TextField
          required
          id="email"
          label="Email"
          defaultValue="Email"
          style={{marginLeft:'10px',marginRight:'10px'}}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="password"
          label="Password"
          style={{marginLeft:'10px',marginRight:'10px'}}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />

        <FormControlLabel style={{marginLeft: '20px'}}
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange}
              value="checkedB"
              color="primary"
            />
          }
          label="Are you incorporated?"
        />
       <div >
           <Button type="submit"
        color="primary" variant="extendedFab" roboto-label="Sign Up" style={{fontSize: '15px',width: '50%'}}>
        Sign Up
      </Button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>

      </form>
     
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



export default connect(mapStateToProps, mapDispatchToProps)(TextFields);