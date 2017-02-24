import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux';
import Drawer from 'react-native-drawer'

import HomeScene from './HomeScene';
import WijkenScene from './WijkenScene';
import AuthenticateScene from './AuthenticateScene';

import MyDrawer from './Drawer';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Navigation = (state) => {

  const TabIcon = ({ selected, title }) => {
    let tabStyles = StyleSheet.flatten([styles.tabIcon, {backgroundColor: selected ? 'orange' : 'black'}]);

    return (
      <Text pointerEvents="none" style={tabStyles}>
        {title}
      </Text>
    );
  };

  if(!state.user.email){
    return(<AuthenticateScene/>)
  } else {
    return (
      <Router>
        <Scene key="drawer" title="Menu" component={MyDrawer} open={false}>
          <Scene key="root">

            <Scene key="tabbar"
              tabs
              tabBarStyle={{ backgroundColor: '#6495ed'}}
            >
              <Scene key="wijkenScene"
                 component={WijkenScene}
                 title="Wijken"
                 icon={TabIcon}
                 initial
               />
              
              <Scene key="homeScene"
                  component={HomeScene}
                  title="Home"
                  icon={TabIcon}
                />
            </Scene>
          </Scene>    
          
        </Scene>
      </Router>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  title:{
    fontSize: 36,
    top: -150,
    color: '#3498db'
  },
  spinner: {
    marginBottom: 50
  },
  drawer: { 
    shadowColor: '#000000', 
    shadowOpacity: 0.8, 
    shadowRadius: 3
  },
  tabIcon: {
    color: 'white', 
    fontWeight: 'bold', 
    padding: 15, 
  }
});

const mapStateToProps = (state, ownProps = {}) => {
  return {
    user: state.user
  }
}

Navigation = connect(
  mapStateToProps
)(Navigation)

export default Navigation;