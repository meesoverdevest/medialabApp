import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux';
import Drawer from 'react-native-drawer'

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
    return (
      <Text style={{backgroundColor: selected ? 'orange' : 'black', color: selected ? 'black' : 'white', padding: 20, borderRadius: 10, overflow: 'hidden' }}>{title}</Text>
    );
  };

  if(!state.user.email){
    return(<AuthenticateScene/>)
  } else {
    return (
      <Router>
        <Scene key="drawer" title="Menu" component={MyDrawer}>
          <Scene key="root">

            <Scene key="tabbar"
              tabs
              tabBarStyle={{ backgroundColor: '#FF0000'}}
            >
              <Scene key="wijken__tab" title="Wijken" icon={TabIcon}>
                <Scene key="wijkenScene"
                  component={WijkenScene}
                  title="Wijken"
                  initial
                />
              </Scene>

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
  // main: {
  //   paddingLeft: 3
  // },
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