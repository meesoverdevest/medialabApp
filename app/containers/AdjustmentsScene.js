import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import AdjustmentRow from '../components/AdjustmentRow';
import Loader from '../components/Loader';
import { arrayIfy } from '../utils/objects'

import { fetch_adjustments } from '../action_creators/adjustments/fetcher'

const AdjustmentsScene = (state) => {

  if(Object.keys(state.adjustments).length === 0){
    state.fetch_adjustments();
    Actions.refresh();
  }

  
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(state.adjustments)
  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  if(Object.keys(state.adjustments).length === 0){
    return (<Loader/>)  
  } else{
    // return (
    //   <View styles={styles.container}>
    //     <Text>Test</Text>
    //   </View>
    // )
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={(data) => <AdjustmentRow {...data} />}
      />
    );
  }
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

const mapDispatchToProps = {
  fetch_adjustments
} 

const mapStateToProps = (state, ownProps = {}) => {
  return {
    adjustments: state.adjustments,
  }
}

AdjustmentsScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjustmentsScene)

export default AdjustmentsScene;