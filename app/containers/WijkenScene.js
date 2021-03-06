import React from 'react'
import { connect } from 'react-redux'
import {
  ListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,
} from 'react-native';

import { arrayIfy } from '../utils/objects'
import Row from '../components/Row';

let WijkenScene = (state) => {
	let rowSource = arrayIfy(state.wijken)
	
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(rowSource)
  // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.if25xvigb
  // http://stackoverflow.com/questions/10522393/google-maps-get-polygon-border-of-zones-neighborhood
  return (
    <ListView
      style={styles.container}
      dataSource={dataSource}
      renderRow={(data) => <Row {...data} />}
    />
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
});

const mapStateToProps = (state, ownProps = {}) => {
  return {
    wijken: state.wijken
  }
}

WijkenScene = connect(
  mapStateToProps
)(WijkenScene)

export default WijkenScene;