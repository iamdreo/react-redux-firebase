import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactIcon from '@material-ui/icons/Contacts';

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white',
   
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
     pathMap: [
      '/',
      '/chat',
      '/dashboard',
      '/account'
      
    ]
  };

   componentWillReceiveProps(newProps) {
    const {pathname} = newProps.location;
    const {pathMap} = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    
    const {value, pathMap} = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        style={styles.stickToBottom}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} style={{ textDecoration: 'none' }} component={Link} to={pathMap[0]}/>
        <BottomNavigationAction label="Chat" icon={<ChatIcon />} style={{ textDecoration: 'none' }} component={Link} to={pathMap[1]}/>
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} style={{ textDecoration: 'none' }} component={Link} to={pathMap[2]} />
       
      </BottomNavigation>
    );
  }
}



export default withRouter(SimpleBottomNavigation);