import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './components/appbar'
import FooterCard from './components/footer/footer'
import Chat from './components/chat/dialogflow'
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Account from './pages/account';
import Order from './pages/order';
import Company from './pages/company';
import Request from './pages/request';
import ErrorPage from './pages/404';
import SignupPage from './components/signin/userSignup'
import ReactGA from 'react-ga';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css'
 import Pusher from 'pusher-js';
 import './index.css';
import HttpsRedirect from 'react-https-redirect';

import SimpleBottomNavigation from './components/bottomNavigation/bottomNavigation'
import Hidden from '@material-ui/core/Hidden';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function initializeReactGA() {
    ReactGA.initialize('UA-131030001-1');
    ReactGA.pageview('/homepage');
}

class App extends Component {

   state = {
    open: false,
  };

  

   componentDidMount() {
        const pusher = new Pusher('ebc3524c710d32ede099', {
          cluster: 'eu',
          encrypted: true,
        });

        const channel = pusher.subscribe('bot');
        channel.bind('bot-response', data => {
          addResponseMessage(data.message);

        
           });
       
      }

     


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });

  };

   handleNewUserMessage = (newMessage) => {
    //console.log( newMessage);
    // Now send the message throught the backend API

    fetch('https://enjoyment.herokuapp.com/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: newMessage,

          }),
        });

    

  }


  render() {
    return (

    
     <HttpsRedirect>
     <div>
     <BrowserRouter>
        <div>
        < Navbar/>
         <Switch>
       <Route exact path="/" component={Home}/>
        <Route path="*" component={ErrorPage}/>
       
       
        
       </Switch>
        
         <Widget handleNewUserMessage={this.handleNewUserMessage}
         
         
         title= 'Kynect.ai'
         badge={1}
         showCloseButton={true}

          />
       
           <Hidden mdDown>
          <FooterCard />
          </Hidden>
        </div>
      </BrowserRouter>
      </div>   
     </HttpsRedirect>
      );
  }
}

export default App;
