import { connect } from 'react-redux'
import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import { submit_vote } from '../action_creators/reactions/vote'
import { getVotesForReaction } from '../utils/objects'

const ReactionRow = (state) => {
  let voteState = false;
  let votes = getVotesForReaction(state.votes, state.id);

  const vote = (upvote) => {
    if(upvote === true) {
      voteState = true;
    }

    state.submit_vote(state.user.token, voteState, state.id);
  }
  console.log(state.hasVoted)
  if(state.hasVoted === true && votes.total > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Text style={styles.text}>
            {`${state.description}`}{`\n`}
            {`${state.created_at}`}
          </Text>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.icon1}>
            {`${votes.upvotes.length}`}<Icon name='ios-happy-outline' iconName='ios-happy-outline' size={45} color="#FFFFFF" show='always'/>
          </Text>

          <Text style={styles.icon1}>
            {`${votes.downvotes.length}`}<Icon name="ios-sad-outline" iconName="ios-sad-outline" size={45} color="red" show='always'/>
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Text style={styles.text}>
            {`${state.description}`}{`\n`}
            {`${state.created_at}`}
          </Text>
        </View>
        <View style={styles.text_container}>
          <TouchableHighlight onPress={() => vote(true)} >
            <Icon name='ios-happy-outline' iconName='ios-happy-outline' size={45} color="#FFFFFF" show='always' style={styles.icon1}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => vote(false)}>
            <Icon name="ios-sad-outline" iconName="ios-sad-outline" size={45} color="red" show='always' style={styles.icon2}/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4DBD1F',
    margin: 5
  },
  text_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "stretch",
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 22,
    color: '#f0f8ff',
  },
  icon1: {
    paddingLeft: 50,
  },
  icon2: {
    paddingRight: 50
  }
});


const mapStateToProps = (state, ownProps = {}) => {
  return {
    adjustments: state.adjustments,
    selected: state.selected_reaction,
    reactions: state.reactions,
    votes: state.votes,
    user: state.user
  }
}

const mapDispatchToProps = {
  submit_vote
} 

ReactionRow = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactionRow)

export default ReactionRow;