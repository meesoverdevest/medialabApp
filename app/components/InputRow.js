import { connect } from 'react-redux'
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

import { set_input_value } from '../action_creators/inputs'
import { register } from '../action_creators/user/register'
import { Actions } from 'react-native-router-flux';

const InputRow = (props) => {

  let register = () => {
    props.register(props.screen + '-mail', props.screen + '-pass');
    Actions.refresh();
  }

  if(props.btn !== undefined) {
    return (  
      <Button
        onPress={() => register()}
        title={props.value}
        color="#841584"
      />


    )
  } else if (props.login !== undefined) {
    return (  
      <Button
        onPress={() => Actions.authenticateScene()}
        title={props.value}
        color="#841584"
      />
    )
  }

  return (
    <View style={styles.container}>

      <Text style={styles.welcome}>
        {`${props.name.toUpperCase()}`}
      </Text>

      <TextInput key={11}
        style={styles.inputs} autoCapitalize='none'
        onChangeText={(mail) => props.set_input_value(props.field, mail)}
        value={props.value} placeholder="Your mail"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  img_container: {
    flex: 1,
    flexDirection: 'row',
  },
  text_container: {
    alignSelf: "stretch",
    alignItems: 'center',
    backgroundColor: '#6495ed',
  },
  text: {
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 22,
    color: '#f0f8ff',
  },
  photo: {
    flex:1,
    height: 150,
  },
  inputs: {
    height: 40, 
    color: '#c0392b', 
    borderColor: 'gray', 
    borderWidth: 1,
    width: 250,
  }
});


const mapDispatchToProps = {
  set_input_value,
  register
} 

InputRow = connect(
  null,
  mapDispatchToProps
)(InputRow)

export default InputRow;