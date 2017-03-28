
import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

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
  },
});

const AdjustmentRow = (props) => {

  let showAdjustment = () => {
    console.log('asd')
    Actions.adjustmentScene(props);
  }

  return (
    <TouchableHighlight style={styles.container} onPress={() => showAdjustment()}>
      <View style={styles.text_container}>
        <Text style={styles.text} numberOfLines={3}>
          {`${props.title}`}{`\n`}
          {`${props.description}`}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
export default AdjustmentRow;