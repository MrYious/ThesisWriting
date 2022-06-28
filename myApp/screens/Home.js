import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      {/* HeaderGroup */}
      <View style={styles.headerGroup}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>BLOODSIGHT</Text>
      </View>
      {/* ButtonGroup */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Use Camera')}>
          <Text style={styles.buttonTitle}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Use File')}>
          <Text style={styles.buttonTitle}>File</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('View Cell Info')}>
          <Text style={styles.buttonTitle}>Cell Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('View About')}>
          <Text style={styles.buttonTitle}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  headerGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  buttonGroup: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-start',
    // backgroundColor: 'blue',
  },
  logo: {
    width: 70,
    height: 112,
  },
  title: {
    marginTop: 10,
    fontSize: 60,
    fontWeight: '800',
    color: '#EA2B4E',
  },
  buttonTitle: {
    fontSize: 25,
    color: '#262626',
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    backgroundColor: '#c3cddb',
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
});

export default Home;
