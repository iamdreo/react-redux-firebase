import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './layout.css'
import Beach from '../../images/beach.jpg'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const styles = theme => ({

    aboutButton: {
    
    [theme.breakpoints.down('sm')]: {
     
    left: '35%',
    marginTop: '30px',
    fontFamily: 'Josefin Sans',
           
     

    },
    [theme.breakpoints.up('md')]: {
      
    left: '52%',
    marginTop: '30px',
    fontFamily: 'Josefin Sans',
    
    
    },
    [theme.breakpoints.up('lg')]: {
     
    left: '52%',
    marginTop: '30px',
    fontFamily: 'Josefin Sans',
      
   
    },
  }, 

    aboutText: {
    
    [theme.breakpoints.down('sm')]: {
     
    textAlign: 'center',
    color: 'black',
    fontSize: '10px',
    fontFamily: 'Josefin Sans',
    marginTop: '10px',
    marginLeft: '5%',
    marginRight: '5%'

        
     

    },
    [theme.breakpoints.up('md')]: {
      
   textAlign: 'center',
    color: 'black',
    fontSize: '20px',
    marginLeft: '100px',
    fontFamily: 'Josefin Sans',
    marginTop: '10px',
    
    },
    [theme.breakpoints.up('lg')]: {
     
   textAlign: 'center',
    color: 'black',
    fontSize: '20px',
    marginLeft: '100px',
    fontFamily: 'Josefin Sans',
    marginTop: '10px', 
   
    },
  }, 
     aboutHeading: {
    
    [theme.breakpoints.down('sm')]: {
     
    textAlign: 'center',
    color: 'black',
    fontSize: '25px',
    fontStyle: 'bold',
    fontFamily: 'Josefin Sans', 
    marginTop: '30px', 
      
     

    },
    [theme.breakpoints.up('md')]: {
      
    textAlign: 'center',
    color: 'black',
    fontSize: '35px',
    fontStyle: 'bold',
    fontFamily: 'Josefin Sans',
    marginTop: '300px',
    marginLeft: '100px', 
    
    },
    [theme.breakpoints.up('lg')]: {
     
    textAlign: 'center',
    color: 'black',
    fontSize: '35px',
    fontStyle: 'bold',
    fontFamily: 'Josefin Sans',
    marginTop: '300px',
    marginLeft: '100px', 
   
    },
  }, 
    image: {
    
    [theme.breakpoints.down('sm')]: {
     
      marginLeft: '3.2%'
    
     

    },
    [theme.breakpoints.up('md')]: {
      
        margin: '20%'
    
    },
    [theme.breakpoints.up('lg')]: {
     
       margin: '20%'
   
    },
  }, 
 

});



class About extends React.Component {
 
  
   render() {

    const { classes } = this.props;

  return (
    <div >
      <Grid container>
          

         <Grid item xs={12} sm={6}>
         <h4 className={classes.aboutHeading}><strong>Get Connected </strong></h4>
          <p className={classes.aboutText}> Our robot works with the best businesses around you to deliver exceptional service. Do your laundry, find the best things to do around you, plan travel packages, hire web/app developers, find tours and more. </p>
          <h2 style={{color: '#0B5345'}} className={classes.aboutText}><strong>All these and more just a simple chat away..</strong></h2>
          
         

        </Grid>

          <Grid item xs={12} sm={6} >
         <img className={classes.image} src={Beach} />

        </Grid>
        
      </Grid>
    </div>
   );
 }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(About);

