import React from 'react' 

import {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {Actions} from 'react-native-router-flux';

let ControlPanel = (state) => {

 let openWijken = () => {
  // state.closeDrawer('wijkenScene')
  // Actions.wijkenScene()
 }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.controlText}>Control Panel</Text>
      <TouchableOpacity style={styles.button} onPress={() => state.closeDrawer()}>
        <Text>Close Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => state.closeDrawer(() => Actions.wijkenScene())}>
        <Text>Wijken</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 40,
  }
})

export default ControlPanel;