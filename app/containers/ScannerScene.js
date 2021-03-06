import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import Permissions from 'react-native-permissions';

import { set_barcode_data } from '../action_creators/barcodes'
import { set_cam_prop } from '../action_creators/camera'
import { request_permission, check_permission } from '../action_creators/user/permissions'
import { set_selected_adjustment } from '../action_creators/adjustments/select'

import Loader from '../components/Loader';

const ScannerScene = (state) => {
  console.log(state.permissions)
  let mappedCodes = [];
  var cam;

  if(state.permissions.cameraChecked === 0){
    state.check_permission('camera');
  }

  // Barcodes List
  for(var key in state.barcodes) {
    mappedCodes.push(<Text style={styles.statusBarText} key={key}>{state.barcodes[key]} - {key}</Text>)
  }

  if( state.permissions.cameraChecked === 0 || state.permissions.camera !== 'authorized' ){

    Alert.alert(
      'Can we access your camera?',
      'We need access so you can start scanning barcodes',
      [
        {text: 'No way', onPress: () => console.log('permission denied'), style: 'cancel'},
        {text: 'OK', onPress: () => state.request_permission('camera')}
      ]
    )
  } 

  if(state.permissions.camera === 'authorized'){
     cam = (<Camera
      ref={(cam) => {
          this.camera = cam;
      }}
      style={styles.camera}
      aspect={Camera.constants.Aspect.fit}
      torchMode={state.camera.torchMode}
      type={state.camera.cameraType}
      onBarCodeRead={(e) => barcodeReceived(e)}
      >
      <Text style={styles.capture} ></Text>
      </Camera>)
  } else {

    cam = (<Text>No cam</Text>);
    
  }

  let barcodeReceived = (e) => {
    state.set_cam_prop('torchMode', 'off')
    state.set_barcode_data(e.data, e.type)

    let adjustmentId = 0;
    // var match = e.data.match(/^([a-zA-Z]+)([0-9]+)$/);
    // if ( match ) {
    //   adjustmentId = match[1] + (parseInt(match[2]) + 1, 10);
    // }
    console.log(e.data)
    adjustmentId = e.data.replace('adjustment:', '');

    console.log('scan =' +adjustmentId);

    state.set_selected_adjustment(adjustmentId)

    Actions.adjustmentScene()
  }
      // {state.permissions.camera != 'authorized' ? (<Text style={styles.welcome}>
      //   Unauthorized
      // </Text>) : (cam)}

      // <View style={styles.statusBar}>
      //   {mappedCodes}
      // </View>
  return (
    <View style={styles.container}>
      {cam}
    </View>
  );
}

const mapDispatchToProps = {
  set_barcode_data,
  set_cam_prop,
  request_permission,
  check_permission,
  set_selected_adjustment
} 

const mapStateToProps = (state, ownProps = {}) => {
  return {
    barcodes: state.barcodes,
    camera: state.camera,
    permissions: state.permissions
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',
    // flex: 0,
    // backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'white',
    // color: '#000',
    padding: 50,
    // margin: 40
  }
});

ScannerScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScannerScene)

export default ScannerScene;