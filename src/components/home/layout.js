import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './layout.css'
import About from './about'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import image from "../../images/pagerr.jpg"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({


    headerButton: {
    
    [theme.breakpoints.down('sm')]: {
     
      left: '39%',
    marginTop: '30px',
    fontFamily: 'Josefin Sans',

    
     

    },
    [theme.breakpoints.up('md')]: {
      
        left: '35%',
    marginTop: '30px',
    fontFamily: 'Josefin Sans',
    
    },
    [theme.breakpoints.up('lg')]: {
     
       left: '47%',
    marginTop: '30px',
    fontFamily: 'Josefin Sans',
   
    },
  }, 
   text: {
    
    [theme.breakpoints.down('sm')]: {
     
      textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '20px',
    fontFamily: 'Josefin Sans',
    marginTop: '20px',     

    },
    [theme.breakpoints.up('md')]: {
      
       textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '25px',
    fontFamily: 'Josefin Sans',
    marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
     
      textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '35px',
    fontFamily: 'Josefin Sans',
    marginTop: '20px',
    },
  },  
   heading: {
    
    [theme.breakpoints.down('sm')]: {
     
      textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '20px',
    fontStyle: 'bold',
    fontFamily: 'Josefin Sans',
    marginTop: '200px',




    },
    [theme.breakpoints.up('md')]: {
      
       textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '25px',
    fontStyle: 'bold',
    fontFamily: 'Josefin Sans',
    marginTop: '200px',
    },
    [theme.breakpoints.up('lg')]: {
     
      textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '35px',
    fontStyle: 'bold',
    fontFamily: 'Josefin Sans',
    marginTop: '200px',
    position:'relative',
    },
  },  


    background: {
    
    [theme.breakpoints.down('sm')]: {
     
      backgroundImage: `url(${image})`,
       height: '400px',
      
       
       width: '100%',
     

    },
    [theme.breakpoints.up('md')]: {
      
     backgroundImage: `url(${image})`,
       height: '400px',
       backgroundPosition: 'center', 
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
     
      backgroundImage: `url(${image})`,
       
       backgroundPosition: 'center', 
       height: '650px',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
    },
  },

});



class Homepage extends React.Component {

  
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
    <div >
      <Grid  className={classes.background} container>
       
          

         <Grid item xs={12} sm={12}>
          <h2 className={classes.heading}> Discover the future </h2>
          <h2 className={classes.text}> Experience the cities you <br/> love and make new memories </h2>
          
          <Button variant="extendedFab" color="primary" className={classes.headerButton} onClick={this.handleClickOpen}>
        Contact us
      </Button>

       <Dialog 
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          >

        <form action="https://formspree.io/enjoymentministerng@gmail.com" method="POST">
          <DialogTitle id="form-dialog-title" >Contact us</DialogTitle>
          <DialogContent>
            <DialogContentText style={{fontFamily: 'Advent Pro', fontSize: '20px', color: 'black'}}>
              Please complete the form below and one of our team members would get back to you.
            </DialogContentText>
           

            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="name"
              required
              fullWidth
              
            />

             <TextField
              autoFocus
              margin="dense"
              name="_replyto"
              label="Email Address"
              type="email"
              required
              fullWidth
             
            />

             <TextField
              autoFocus
              margin="dense"
              name="number"
              label="Phone no."
              type="number"
              fullWidth
              required
              

            />

             <TextField
              autoFocus
              margin="dense"
              name="message"
              label="Message"
              type="text"
              multiline
              rows="4"
              fullWidth
              required
             
            />
             

           
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" value="Send" color="primary">
              Send
            </Button>

          </DialogActions>
           </form>
        </Dialog>



        </Grid>
        
      </Grid>
      <About/>
    </div>
  );
 }
}



Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Homepage);