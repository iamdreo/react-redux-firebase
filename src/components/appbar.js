import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({


     titleText: {
    
    [theme.breakpoints.down('sm')]: {
     
     textAlign: 'center', 
     marginTop: '12px', 
     fontSize: '25px',
      fontFamily: 'Advent Pro',      
     

    },
    [theme.breakpoints.up('md')]: {
      
      textAlign: 'center', 
     marginTop: '12px', 
     fontSize: '18px',
      fontFamily: 'Advent Pro',

    },
    [theme.breakpoints.up('lg')]: {  
      
       
       textAlign: 'center', 
     marginTop: '12px', 
     fontSize: '30px',
      fontFamily: 'Advent Pro',
      
    },
  },
  login: {
    
    [theme.breakpoints.down('sm')]: {
     
     marginLeft: '60%',
      
      
     

    },
    [theme.breakpoints.up('md')]: {
      
      marginLeft: '80%',

    },
    [theme.breakpoints.up('lg')]: {  
      
       
       marginLeft: '80%',
      
    },
  },
    appbar: {
    
    [theme.breakpoints.down('sm')]: {
     
      width: '350px',
     
      
     

    },
    [theme.breakpoints.up('md')]: {
      
      width: '300px',

    },
    [theme.breakpoints.up('lg')]: {
     
    
       
       
    },
  },

});


class Navbar extends React.Component {



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

  
    return(
      <div >
      <AppBar position='static' color="white">
        <Toolbar >
         
          <p className={classes.titleText}>
            Kynect.ai
          </p>
          <Button className={classes.login}  onClick={this.handleClickOpen}>Contact</Button>
          
        </Toolbar>
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

      </AppBar>
    </div>
);
}
}



Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navbar);
