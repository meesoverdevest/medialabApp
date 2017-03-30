import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

// import { Actions } from 'react-native-router-flux';
// import AdjustmentRow from '../components/AdjustmentRow';
// import Loader from '../components/Loader';
// import { arrayIfy } from '../utils/objects'

import { fetch_adjustment } from '../../action_creators/adjustments/fetcher'
import { getObjectWithId } from '../../utils/objects'

const AdjustmentScene = (props) => {
  let obj = {}

  if(props.selected !== null) {
    obj = getObjectWithId(props.adjustments, props.selected)
  }
  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>
          {`${obj.title}`}
        </Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>
          {`${obj.description}`}
        </Text>
      </View>
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
    flex: 1,
    flexDirection: 'row',
    alignSelf: "stretch",
    alignItems: 'center',
    backgroundColor: '#6495ed',
  },
  text: {
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    color: '#f0f8ff',
  },
  photo: {
    flex:1,
    height: 150,
  }
});

const mapDispatchToProps = {
  fetch_adjustment
} 

const mapStateToProps = (state, ownProps = {}) => {
  return {
    adjustments: state.adjustments,
    selected: state.selected_adjustment
  }
}

AdjustmentScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjustmentScene)

export default AdjustmentScene;