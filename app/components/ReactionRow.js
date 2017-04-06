import { connect } from 'react-redux'
import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const ReactionRow = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>
          {`${props.description}`}{`\n`}
          {`${props.created_at}`}
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
  }
});


ReactionRow = connect(
  null,
  null
)(ReactionRow)

export default ReactionRow;