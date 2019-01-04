import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from 'reactstrap';
import '../home/layout.css'
import TextFields from './signuptextbox';




const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    width: '40%',
    marginTop: '10%',
    marginBottom: '10%',
    textAlign: 'center',
    marginLeft: '30%',
    height: '500px',
    color: theme.palette.text.secondary,
  },
   leftIcon: {
    marginRight: theme.spacing.unit,
    marginLeft: '50px'
  }, 
   iconSmall: {
    fontSize: 20,
    marginRight: '50px'
  },  
   
});

function SignupPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
          

         <Grid item xs={12}>
          <Paper className={classes.paper}>

        <h1> Sign up </h1>

        <p>Already have an account? <Button color="link">Sign in</Button></p>  

        

       <TextFields style={{ marginTop:'20px' }}/>



         

          </Paper>
         

        </Grid>
        
      </Grid>
    </div>
  );
}

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupPage);