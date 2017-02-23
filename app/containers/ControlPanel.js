import React from 'react' 
import { connect } from 'react-redux'
import {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {nextScene} from '../action_creators/scenes'

let ControlPanel = (state) => {

  let setNextScene = (scene = false) => {
    state.nextScene(scene)
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.controlText}>Control Panel</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          setNextScene()
          state.closeDrawer()
        }}>
        <Text>Close Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => { 
          setNextScene('wijkenScene'); 
          state.closeDrawer()
        }}>
        <Text>Wijken</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        setNextScene('home')
        state.closeDrawer()
      }}>
        <Text>Home</Text>
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

const mapStateToProps = (state, ownProps = {}) => {
  return {
    nextScene: state.scene
  }
}

const mapDispatchToProps = {
  nextScene
}

ControlPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel)

export default ControlPanel;