import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  Dimensions,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import ReactionRow from '../../components/ReactionRow';

import Loader from '../../components/Loader';

import MapView from 'react-native-maps';

import { getObjectWithId, getReactionsForAdjustment, hasUserVotedOnReaction } from '../../utils/objects'
import { set_selected_adjustment } from '../../action_creators/adjustments/select'
import { fetch_reactions } from '../../action_creators/reactions/fetcher'
import { fetch_votes } from '../../action_creators/reactions/votes_fetcher'

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;

const AdjustmentScene = (state) => {
  let obj = {}
  let reactions = {}

  if(state.selected !== null) {
    obj = getObjectWithId(state.adjustments, state.selected)
  }

  if(Object.keys(state.votes).length === 0){
    state.fetch_votes(state.user.token);
  }

  if(Object.keys(state.reactions).length === 0){
    state.fetch_reactions(state.user.token);
  }

  if(Object.keys(state.reactions).length !== 0 && Object.keys(state.votes).length !== 0){

    reactions = getReactionsForAdjustment(state.reactions, obj.id)

    for (var i = reactions.length - 1; i >= 0; i--) {
      let hasVoted = hasUserVotedOnReaction(state.votes[reactions[i].id], state.user.id, reactions[i]);
      
      reactions[i].hasVoted = hasVoted;
    }
  }

  let onPressReact = () => {
    Actions.createReactionScene();
  }
  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  // Show listview with reactions

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(reactions)
  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  if(Object.keys(state.reactions).length === 0 && Object.keys(state.votes).length === 0){
    return (<Loader/>)  
  } else {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
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
                latitude: 51.92442,
                longitude: 4.477733,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: 51.92442,
                  longitude: 4.477733
                }}
                title={`${obj.title}`}
                description={`${obj.description}`}
              />
            </MapView>
          </View>
         <ListView
            style={styles.container}
            dataSource={dataSource}
            renderRow={(data) => <ReactionRow {...data} />}
          />
        </ScrollView>
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
    height: 150,
    width: SCREEN_WIDTH,
  },
  scrollView: {
    marginBottom: 40
  }
});

const mapStateToProps = (state, ownProps = {}) => {
  return {
    adjustments: state.adjustments,
    selected: state.selected_adjustment,
    reactions: state.reactions,
    user: state.user,
    votes: state.votes
  }
}

const mapDispatchToProps = {
  fetch_reactions,
  fetch_votes
} 

AdjustmentScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjustmentScene)

export default AdjustmentScene;