import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const About = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
  },
});

export default About;
