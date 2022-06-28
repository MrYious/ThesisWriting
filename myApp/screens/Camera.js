import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Camera = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Camera</Text>
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

export default Camera;
