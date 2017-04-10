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

import { getObjectWithId } from '../../utils/objects'
import { create_reaction } from '../../action_creators/adjustments/create_reaction'
import { fetch_reactions } from '../../action_creators/reactions/fetcher'

import { set_input_value } from '../../action_creators/inputs'
import { isObjectEmpty } from '../../utils/objects'

const CreateReactionScene = (state) => {
  let obj = {}

  const screen = 'CreateReactionScene';
  const fieldNames = ["CreateReactionScene-reaction"];

  var reactionInput = isObjectEmpty(state.inputs["CreateReactionScene-reaction"]) !== true ? state.inputs["CreateReactionScene-reaction"]["value"] : "";

  if(state.selected !== null) {
    obj = getObjectWithId(state.adjustments, state.selected)
  }

  let submitReaction = (input) => {
    state.create_reaction(input, obj.id, fieldNames, state.user.token);
    state.fetch_reactions(state.user.token);
    Actions.adjustmentScene();
  }

  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  // Show listview with reactions
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>
          {`${obj.title}`}
        </Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>
          Beschrijving: {`${obj.description}`}
        </Text>
      </View>
       <TextInput key={12}
        style={styles.inputs}
        onChangeText={(reaction) => state.set_input_value(fieldNames[0], reaction)}
        value={reactionInput} 
        />
        <Button
          onPress={() => submitReaction(reactionInput)}
          title="Verstuur uw reactie"
          backgroundColor="orange"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title_container: {
    flexDirection: 'row',
    backgroundColor: '#333333',
  },
  title_text: {
    color: '#FFFFFF',
    fontSize: 28,
    marginTop: 70,
    padding: 10,
  },
  text_container: {
    flexDirection: 'row',
    backgroundColor: '#6495ed',
  },
  inputs: {
    height: 40, 
    color: '#c0392b', 
    borderColor: 'gray', 
    borderWidth: 1,
    width: 250,
  }
});

const mapStateToProps = (state, ownProps = {}) => {
  return {
    adjustments: state.adjustments,
    selected: state.selected_adjustment,
    inputs: state.inputs,
    user: state.user,
  }
}

const mapDispatchToProps = {
  create_reaction,
  set_input_value,
  fetch_reactions
} 

CreateReactionScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReactionScene)

export default CreateReactionScene;