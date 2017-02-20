import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import { StatusBar } from 'react-native';

// import { Scene } from 'react-native-router-flux';
// import WijkenScene from './WijkenScene';
// import AuthenticateScene from './AuthenticateScene';

let MyDrawer = (state) => {
  // const navState = state.navigationState;
  // const children = state.children;
  // console.log(state)
  // const { navigationState: { children } } = this.props;
  console.log(state)
  let onOpen = () => {
    Actions.refresh({key:state.name, open: true})
  }

  let onClose = () => {
    Actions.refresh({key:state.name, open: false})
  }

  return (
    <Drawer
      open={state.open}
      onOpen={()=>onOpen()}
      onClose={()=>onClose()}
      type="displace"
      content={<ControlPanel closeDrawer={() => onClose()}/>}
      tapToClose={true}
      openDrawerOffset={0.2}
      panCloseMask={0.2}
      negotiatePan={true}
      tweenHandler={(ratio) => ({
        main: { opacity:Math.max(0.54,1-ratio) }
      })}>
      <StatusBar hidden={true} />
      <DefaultRenderer
        navigationState={state.children[0]}
        onNavigate={state.onNavigate}
      />


     
    </Drawer>
  );
      // <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
}


// <Drawer
//             open={true}
//             key="drawer"
//             ref={(ref) => this._drawer = ref}
//             type="static"
//             content={<ControlPanel />}
//             openDrawerOffset={100}
//             styles={styles.drawer}
//             tweenHandler={Drawer.tweenPresets.parallax}
//             >



export default MyDrawer; 