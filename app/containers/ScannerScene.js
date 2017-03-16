import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import Permissions from 'react-native-permissions';

import { set_barcode_data } from '../action_creators/barcodes'
import { set_cam_prop } from '../action_creators/camera'
import { request_permission, check_permission } from '../action_creators/user/permissions'

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
      style={{height: 400}}
      aspect={Camera.constants.Aspect.fit}
      torchMode={state.camera.torchMode}
      type={state.camera.cameraType}
      onBarCodeRead={(e) => barcodeReceived(e)}
      />)
  } else {

    cam = (<Text>No cam</Text>);
    
  }

  let barcodeReceived = (e) => {
    state.set_cam_prop('torchMode', 'off')
    state.set_barcode_data(e.data, e.type)
    Actions.scannerScene()
  }
      // {state.permissions.camera != 'authorized' ? (<Text style={styles.welcome}>
      //   Unauthorized
      // </Text>) : (cam)}

  return (
    <View style={styles.container}>
      {cam}
      <View style={styles.statusBar}>
        {mappedCodes}
      </View>
    </View>
  );
}

const mapDispatchToProps = {
  set_barcode_data,
  set_cam_prop,
  request_permission,
  check_permission
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
});

ScannerScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScannerScene)

export default ScannerScene;