import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Switch } from 'react-native-router-flux';
import Drawer from 'react-native-drawer'

import HomeScene from '../HomeScene';
import WijkenScene from '../WijkenScene';
import ScannerScene from '../ScannerScene';
import AuthenticateScene from './AuthenticateScene';
import RegisterScene from './RegisterScene';
import AdjustmentsScene from '../AdjustmentsScene';
import AdjustmentScene from '../Adjustments/AdjustmentScene';
import CreateReactionScene from '../Adjustments/CreateReactionScene';

import MyDrawer from './Drawer';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const Navigation = (state) => {
  let iconPaths = {
    Events:  require('../../assets/icons/events.png'),
    Home: require('../../assets/icons/home.png'),
    Wijzigingen: require('../../assets/icons/overview.png'),
    Scan: require('../../assets/icons/scan.png')
  };
  

  const TabIcon = ({ selected, title }) => {
    let tabStyles = StyleSheet.flatten({backgroundColor: selected ? 'white' : 'transparent', padding: 10});

    return (
      <View style={tabStyles}>
      <Image source={iconPaths[title]}/>
      </View>
    );
  }

  return(

    <Router drawerImage={require('../../assets/icons/hamburger_sm.png')} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
      <Scene key="root"
        component={connect(state=>({profile:state.user}))(Switch)}
        tabs={true}
        unmountScenes
        selector={props=>props.profile.email ? "drawer" : "tabbar"}
        >

        <Scene key="drawer" title="Menu" component={MyDrawer} open={false}>   
          <Scene key="tabbar1"
            tabs
            tabBarStyle={{ backgroundColor: '#188834'}}
            >
            <Scene key="wijkenScene"
              component={WijkenScene}
              title="Events"
              icon={TabIcon}
              initial
             />
              
            <Scene key="homeScene"
                component={HomeScene}
                title="Home"
                icon={TabIcon}
              />

            <Scene key="adjustmentsScene"
                component={AdjustmentsScene}
                title="Wijzigingen"
                icon={TabIcon}
              />

            <Scene
              key="scannerScene"
              direction="vertical"
              component={ScannerScene}
              title="Scan"
              icon={TabIcon}
            />

            <Scene
              key="adjustmentScene"
              direction="vertical"
              schema="modal"
              component={AdjustmentScene}
              title="Wijziging"
            />      

            <Scene
              key="createReactionScene"
              component={CreateReactionScene}
              title="Reageren op wijziging"
            />      
          </Scene>
        </Scene>
        <Scene key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#188834'}}
          >
          <Scene key="registerScene"
              component={RegisterScene}
              title="Registreer"
              icon={TabIcon}
              initial
            />

          <Scene
            key="authenticateScene"
            component={AuthenticateScene}
            title="Login"
            direction="vertical"
            schema="modal"
            />
        </Scene>
      </Scene>    
      
    </Router>


    )
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
  navBar: {
    flex: 1,
    backgroundColor: '#188834', 
  },
  navTitle: {
    color: 'white', 
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