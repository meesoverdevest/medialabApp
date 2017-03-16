
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const HomeScene = (state) => {

      // {state.permissions.camera != 'authorized' ? (<Text style={styles.welcome}>
      //   Unauthorized
      // </Text>) : (cam)}

  return (
    <View style={styles.container}>
      <Button
        onPress={() => Actions.scannerScene()}
        title="QR code scannen"
        color="#841584"
        style={styles.btn}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140,
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  btn: {
    marginTop: 150,
  }
});

export default HomeScene;