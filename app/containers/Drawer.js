import React, { Component } from 'react';
import { connect } from 'react-redux'
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

let MyDrawer = (state) => {

  let onOpen = () => {
    Actions.refresh({key:state.name, open: true})
  }

  let onClose = () => {
    if(state.nextScene !== false || state.nextScene !== undefined){
      switch(state.nextScene) {
        case "wijkenScene":
          Actions.wijkenScene();
          Actions.refresh({key:state.name, open: false})
          break;
        case "homeScene":
          Actions.homeScene();
          Actions.refresh({key:state.name, open: false})
          break;
        default:
          Actions.refresh({key:state.name, open: false})
          break;
      }
    }
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
      <DefaultRenderer
        navigationState={state.children[0]}
        onNavigate={state.onNavigate}
      />
 
    </Drawer>
  );
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    nextScene: state.scene
  }
}

MyDrawer = connect(
  mapStateToProps
)(MyDrawer)

export default MyDrawer; 