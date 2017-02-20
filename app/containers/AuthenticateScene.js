import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { set_input_value } from '../action_creators/inputs'
import { login } from '../action_creators/user/login'
import { isObjectEmpty } from '../utils/objects'

const AuthenticateScene = (state) => {
  const screen = 'AuthenticateScene';
  const fieldNames = ["AuthenticateScene-size", "AuthenticateScene-pass"];

  // var nameInput = isObjectEmpty(state.inputs["AuthenticateScene-name"]) !== true ? state.inputs["AuthenticateScene-name"]["value"] : "";
  var mailInput = isObjectEmpty(state.inputs["AuthenticateScene-mail"]) !== true ? state.inputs["AuthenticateScene-mail"]["value"] : "";
  var passInput = isObjectEmpty(state.inputs["AuthenticateScene-pass"]) !== true ? state.inputs["AuthenticateScene-pass"]["value"] : "";
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Login.
      </Text>

      <Text style={styles.welcome}>
        Mail
      </Text>
      <TextInput key={11}
        style={styles.inputs} autoCapitalize='none'
        onChangeText={(mail) => state.set_input_value(screen, 'mail', mail)}
        value={mailInput} placeholder="Your mail"
      />
      <Text style={styles.welcome}>
        Password
      </Text>
      <TextInput key={12}
        style={styles.inputs} secureTextEntry={true}
        onChangeText={(pass) => state.set_input_value(screen, 'pass', pass)}
        value={passInput} 
      />
      <Button
        onPress={() => state.login(mailInput, passInput)}
        title="login"
        color="#841584"
      />
     
        
    </View>
  );
}

const mapDispatchToProps = {
  login,
  set_input_value
} 

const mapStateToProps = (state, ownProps = {}) => {
  return {
    inputs: state.inputs
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  welcome: {
    fontSize: 20, 
    fontWeight: '400',
    color: '#e74c3c',
    textAlign: 'center',
    margin: 10,
  },
  inputs: {
    height: 40, 
    color: '#c0392b', 
    borderColor: 'gray', 
    borderWidth: 1,
    width: 250,
  }
});

AuthenticateScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateScene)

export default AuthenticateScene;