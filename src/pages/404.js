import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import image from "../images/people.jpg" 


 const styles = theme => ({


  line: {
    
    [theme.breakpoints.down('sm')]: {
     
    borderLeft: '2px solid white',
    height: '150px',
    marginRight: '100px',
     marginTop: '250px'

     

    },
    [theme.breakpoints.up('md')]: {
      
       borderLeft: '2px solid white',
       height: '150px',
       marginRight: '100px',
        marginTop: '250px',

    },
    [theme.breakpoints.up('lg')]: {
     
       borderLeft: '2px solid white',
       height: '150px',
       marginRight: '100px',
       marginTop: '250px',

          
    },
  },

errorSubTexterButton: {
    
    [theme.breakpoints.down('sm')]: {
     
        fontfamily: 'Raleway',
        color: 'white',
        fontSize: '20px',
         marginRight: '40%',
          marginTop: '20px',
          textDecoration: 'underline',

     

    },
    [theme.breakpoints.up('md')]: {
      
       fontfamily: 'Josefin Sans',
        color: 'white',
        fontSize: '40px',
        marginLeft: '80%',
        position: 'relative',
         textAlign: 'center',
         right: '85%',
          textDecoration: 'underline',
          width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
     
       fontfamily: 'Josefin Sans',
        color: 'white',
        fontSize: '20px',
         position: 'relative',
         textAlign: 'center',
         right: '95%',
          textDecoration: 'underline',
          width: '35%',
          
    },
  },
    errorSubTexter: {
    
    [theme.breakpoints.down('sm')]: {
     
        fontfamily: 'Raleway',
        color: 'white',
        fontSize: '20px',
         marginRight: '40%',
          marginTop: '250px',

     

    },
    [theme.breakpoints.up('md')]: {
      
         fontfamily: 'Raleway',
        color: 'white',
        fontSize: '40px',
         marginRight: '40%',
          marginTop: '220px',
    },
    [theme.breakpoints.up('lg')]: {
     
       fontfamily: 'Raleway',
        color: 'white',
        fontSize: '20px',
         position: 'relative',
         textAlign: 'center',
         right: '35%',
          marginTop: '40%',
          
    },
  },
 
    errorSubText: {
    
    [theme.breakpoints.down('sm')]: {
     
        fontfamily: 'Raleway',
        color: 'white',
        fontSize: '20px',
         marginRight: '40%',
          marginTop: '5%',

     

    },
    [theme.breakpoints.up('md')]: {
      
       fontfamily: 'Raleway',
        color: 'white',
        fontSize: '40px',
         position: 'relative',
         textAlign: 'center',
         right: '2%',
          marginTop: '20px',
          width: '90%',
    },
    [theme.breakpoints.up('lg')]: {
     
       fontfamily: 'Raleway',
        color: 'white',
        fontSize: '20px',
         position: 'relative',
         textAlign: 'center',
         right: '20%',
          marginTop: '20px',
          width: '80%',
          
    },
  },
 
    errorText: {
    
    [theme.breakpoints.down('sm')]: {
     
        fontfamily: 'Josefin Sans',
        color: 'white',
        fontSize: '30px',
        marginLeft: '70px',
        marginTop: '300px'

     

    },
    [theme.breakpoints.up('md')]: {
      
       fontfamily: 'Josefin Sans',
        color: 'white',
        fontSize: '50px',
        marginLeft: '70%',
        marginTop: '70%',
    },
    [theme.breakpoints.up('lg')]: {
     
       fontfamily: 'Josefin Sans',
        color: 'white',
        fontSize: '50px',
        marginLeft: '80%',
        marginTop: '50%',
    },
  },

});


class ErrorPage extends React.Component {
 
    
   


  render() {

     const { classes } = this.props;
  return (
  
    
    
      <Grid  style={{backgroundImage: `url(${ image })`, /* The image used */
  
  height: '660px', 
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundColor: 'black'}} container>
          


         <Grid container>
         <Grid item xs={5}>
          <h2 className={classes.errorText} > 404</h2>
          </Grid>

          <Grid item xs={1}>
          <div className={classes.line}></div>
          </Grid>

          <Grid item xs={6}>
          <h2 className={classes.errorSubTexter}> Sorry!</h2>
          <h2 className={classes.errorSubText} > The Page you are looking for does not exist</h2>
          
          <Link to="/">
          <p  className={classes.errorSubTexterButton}> Go to home page</p>
         </Link>
          
          </Grid>
        
          </Grid>
          
         
        </Grid>
       
        
     
  
  );
}
}

ErrorPage.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(ErrorPage);