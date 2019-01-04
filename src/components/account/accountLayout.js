import React from 'react';
import './account.css';
import indomie from '../../images/indomie.jpg'
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import CameraIcon from '@material-ui/icons/CameraAlt';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
       


       text: {
    
    [theme.breakpoints.down('sm')]: {
     
        
        marginLeft: '20%',
        
         marginBottom: 20,
     

    },
    [theme.breakpoints.up('md')]: {

      
     
    },
    [theme.breakpoints.up('lg')]: {

       margin: 0,
     
       
  },
},
    labelTitle: {
    
    [theme.breakpoints.down('sm')]: {
     
        marginTop:'20px',
        marginBottom: '20px',
        fontSize: '20px',
        fontStyle: 'bold',
       
        
       width:'100%',
       
     

    },
    [theme.breakpoints.up('md')]: {
      
       marginTop:'20px',
        marginBottom: '20px',
        fontSize: '20px',
        fontStyle: 'bold',
        fontFamily: 'Josefin Sans',
    },
    [theme.breakpoints.up('lg')]: {
     
        marginTop:'20px',
        marginBottom: '20px',
        fontSize: '20px',
        fontStyle: 'bold',
        fontFamily: 'Josefin Sans',
  },
},
    imageButton: {
    
    [theme.breakpoints.down('sm')]: {
     
        backgroundColor:"white", 
      
          marginTop: '60%',
           height:'20px',
           textAlign: 'center',
           width: '100%',
           marginLeft: 13,
     

    },
    [theme.breakpoints.up('md')]: {
      
       backgroundColor:"white", 
        marginLeft: '78px',
         marginRight: 'auto',
          marginTop: '28.5%',
           height:'20px',
    },
    [theme.breakpoints.up('lg')]: {
     
       backgroundColor:"white", 
        marginLeft: '78px',
         marginRight: 'auto',
          marginTop: '28.5%',
           height:'20px',
    },
  },
    headerText: {
    
    [theme.breakpoints.down('sm')]: {
     
        marginLeft: '6%',
        marginTop: '70px',
     
       marginBottom: '10px',
       fontStyle: 'bold',
       fontSize: '20px',
       fontFamily: 'Josefin Sans',

     

    },
    [theme.breakpoints.up('md')]: {
      
        marginLeft: '6%',
       marginTop: '10%',
       marginBottom: '50px',
       fontStyle: 'bold',
       fontSize: '50px',
       fontFamily: 'Josefin Sans',
    },
    [theme.breakpoints.up('lg')]: {
     
        marginLeft: '6%',
       marginTop: '10%',
       marginBottom: '50px',
       fontStyle: 'bold',
       fontSize: '50px',
       fontFamily: 'Josefin Sans',
    },
  },

});




class Accounts extends React.Component {
  
  render() {

    const { classes } = this.props;

    return (
      <div >
      <Grid container >

      <h2 className={classes.headerText}> Account </h2>
       

      </Grid>
       <Divider />
       <Grid container >
      
       <Grid item xs>
      
        <Avatar
        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', top: '10%', width: '100px', height: '100px' }}
        alt=""
        src={indomie}
       
      />
       
        <input 
        style={{display: 'none'}}
        accept="image/*"
        type="file"
        multiple
        id="upload-image"
        />
        <label htmlFor="upload-image">
        <Button
        component="span"
        variant="extendedFab"
        className={classes.imageButton} >
        <CameraIcon style={{marginRight: '5px'}}/>
        Upload 
      </Button>
      </label>
      </Grid>

      <Grid item xs={8}>
     
       <form noValidate autoComplete="off">
      
      
      <h1 className={classes.labelTitle}> Name </h1>
       
     
       <TextField 
          id="Name"          
          className={classes.text}
          placeholder="Name"
          
       
          margin="normal"
         
          InputLabelProps={{
            shrink: true,
          }}
        />

       
        
      <h1 className={classes.labelTitle}>Address </h1>
       
     
       <TextField
          id="Address"
          className={classes.text}
          placeholder="Enter Address"
         
          margin="normal"
          
          InputLabelProps={{
            shrink: true,
          }}
        />
       
      <h1 className={classes.labelTitle}>Phone </h1>
           
       
       <TextField
          id="phone"
          className={classes.text}
          placeholder="Enter Phone Number"
         
          margin="normal"
          
          InputLabelProps={{
            shrink: true,
          }}
        />
       
         

        <Button 
        
        color="primary"
        style={{ marginTop:'20px', marginBottom: '20px', marginLeft: '35px'}} >
        
        Edit Profile
      </Button>

      </form>
      
      </Grid>
      <Grid item xs={1}>


      </Grid>

    

      </Grid>
    	</div>

      );
  }
}

export default withStyles(styles)(Accounts)
