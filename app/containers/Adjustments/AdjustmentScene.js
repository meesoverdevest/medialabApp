import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { getObjectWithId } from '../../utils/objects'
import { set_selected_adjustment } from '../../action_creators/adjustments/select'

const AdjustmentScene = (state) => {
  let obj = {}

  if(state.selected !== null) {
    obj = getObjectWithId(state.adjustments, state.selected)
  }

  let onPressReact = () => {
    Actions.createReactionScene();
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
      <Button
        onPress={() => onPressReact()}
        title="Reageer op wijziging"
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
  text: {
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    color: '#f0f8ff',
  }
});

const mapStateToProps = (state, ownProps = {}) => {
  return {
    adjustments: state.adjustments,
    selected: state.selected_adjustment
  }
}

AdjustmentScene = connect(
  mapStateToProps,
  null
)(AdjustmentScene)

export default AdjustmentScene;