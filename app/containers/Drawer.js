import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import { StatusBar } from 'react-native';

let MyDrawer = (state) => {
  
  let onOpen = () => {
    Actions.refresh({key:state.name, open: true})
  }

  let onClose = (newView = false) => {
    if(newView){
      // let actionCall = 'Actions.' + newView + '();';
      // eval(actionCall);
      // console.log(newView);
      // Actions.{newView}();
      // Actions.wijkenScene();
      // Actions.refresh({key:newView, open: true})
      newView();
    }
    Actions.refresh({key:state.name, open: false})
  }

  return (
    <Drawer
      open={state.open}
      onOpen={()=>onOpen()}
      onClose={()=>onClose()}
      type="displace"
      content={<ControlPanel closeDrawer={(newView) => onClose(newView)}/>}
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
}



export default MyDrawer; 