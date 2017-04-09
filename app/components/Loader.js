import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

// import Spinner from 'react-native-spinkit'
import Spinner from 'react-native-loading-spinner-overlay';
import { StatusBar } from 'react-native';

const Loader = () => {
  // Loader types
  // 'CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'
  // style={styles.spinner} isVisible={true} size={100} type='WanderingCubes' color='#3498db'
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Spinner visible={true} size="large" />
      <Image style={styles.logo} source={require('../assets/logo_green.png')} />
    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title:{
    fontSize: 36,
    top: -150,
    color: '#3498db'
  },
  spinner: {
    marginTop: 20
  },
  logo: {

  }
});

export default Loader;