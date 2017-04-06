import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  Dimensions
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import ReactionRow from '../../components/ReactionRow';

import MapView from 'react-native-maps';

import { getObjectWithId, getReactionsForAdjustment } from '../../utils/objects'
import { set_selected_adjustment } from '../../action_creators/adjustments/select'
import { fetch_reactions } from '../../action_creators/reactions/fetcher'

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;

const AdjustmentScene = (state) => {
  let obj = {}
  let reactions = {}

  if(state.selected !== null) {
    obj = getObjectWithId(state.adjustments, state.selected)
  }

  if(Object.keys(state.reactions).length === 0){
    state.fetch_reactions(state.user.token);
  } else {
    reactions = getReactionsForAdjustment(state.reactions, obj.id)
    console.log(reactions)
  }

  let onPressReact = () => {
    Actions.createReactionScene();
  }
  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  // Show listview with reactions


  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(reactions)
  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  if(Object.keys(reactions).length === 0){
    return (<Loader/>)  
  } else {
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
        <View style={{ position: 'relative', height: 150}}>
           <MapView
            initialRegion={{
              latitude: 52.3702160,
              longitude: 4.8951680,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
          />
        </View>
       <ListView
          style={styles.container}
          dataSource={dataSource}
          renderRow={(data) => <ReactionRow {...data} />}
        />
      </View>
    );
  }
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
  },
  map: {
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // left: 0,
    // bottom: 0,
    height: 150,
    width: SCREEN_WIDTH,
  }
});

const mapStateToProps = (state, ownProps = {}) => {
  return {
    adjustments: state.adjustments,
    selected: state.selected_adjustment,
    reactions: state.reactions,
    user: state.user
  }
}

const mapDispatchToProps = {
  fetch_reactions
} 

AdjustmentScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjustmentScene)

export default AdjustmentScene;