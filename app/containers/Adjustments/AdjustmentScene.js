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

// import { fetch_adjustments } from '../action_creators/adjustments/fetcher'

const AdjustmentScene = (props) => {

console.log(props);
  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text} numberOfLines={3}>
          {`${props.title}`}{`\n`}
          {`${props.description}`}
        </Text>
      </View>
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
    fontSize: 22,
    color: '#f0f8ff',
  },
  photo: {
    flex:1,
    height: 150,
  }
});

// const mapDispatchToProps = {
//   fetch_adjustments
// } 

// const mapStateToProps = (state, ownProps = {}) => {
//   return {
//     adjustments: state.adjustments,
//   }
// }

// AdjustmentScene = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AdjustmentScene)

export default AdjustmentScene;