
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

const Row = (props) => {
  console.log(props)

  return (
    <View style={styles.container}>
      <View style={styles.img_container}>
        <Image source={{uri: props.picture}} style={styles.photo} />
      </View>

      <View style={styles.text_container}>
        <Text style={styles.text}>
          {`${props.name}`}
        </Text>
      </View>
    </View>
  );
}
export default Row;