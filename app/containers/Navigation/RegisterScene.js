import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import InputRow from '../../components/InputRow';

import { arrayIfy } from '../../utils/objects'
import { set_input_value, update_inputs } from '../../action_creators/inputs'

let RegisterScene = (state) => {
  const screen = 'RegisterScene';
  const fieldNames = ["RegisterScene-name", "RegisterScene-mail", "RegisterScene-pass", "RegisterScene-neighbourhood"];

  let screenInputs = update_inputs(state.inputs, fieldNames);
  screenInputs['RegisterScene-btn'] = []
  screenInputs['RegisterScene-btn']['btn'] = true;
  screenInputs['RegisterScene-btn']['value'] = 'Registreer!';
  screenInputs['RegisterScene-login'] = []
  screenInputs['RegisterScene-login']['login'] = true;
  screenInputs['RegisterScene-login']['value'] = 'Ik heb al een account';

  
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(screenInputs)
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Registreer je hier
      </Text>
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={(data) => <InputRow {...data} />}
      />
     
        
    </View>
  );
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    inputs: state.inputs
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  welcome: {
    fontSize: 20, 
    fontWeight: '500',
    color: '#e74c3c',
    textAlign: 'center',
    margin: 10,
    marginTop: 70,
  },
  
});

RegisterScene = connect(
  mapStateToProps
)(RegisterScene)

export default RegisterScene;