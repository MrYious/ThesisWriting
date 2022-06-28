import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import About from './About.js';
import Camera from './Camera.js';
import CellInfo from './CellInfo.js';
import File from './File.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Page = createNativeStackNavigator();

const Home = () => {
  return (
    <Page.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#273D5B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Screen Group 1 */}
      <Page.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      {/* Screen 1 */}
      <Page.Screen
        name="Camera"
        component={Camera}
        options={{
          title: 'Camera',
        }}
      />
      {/* Screen 2 */}
      <Page.Screen
        name="File"
        component={File}
        options={{
          title: 'File',
        }}
      />
      {/* Screen 3 */}
      <Page.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
        }}
      />
      {/* Screen 4 */}
      <Page.Screen
        name="CellInfo"
        component={CellInfo}
        options={{
          title: 'CellInfo',
        }}
      />
    </Page.Navigator>
  );
};

const HomeScreen = ({navigation}) => {
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
          onPress={() => navigation.navigate('Camera')}>
          <Icon name="camera" size={40} color="#F4F4F4" />
          <Text style={styles.buttonTitle}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('File')}>
          <Icon name="file-photo-o" size={40} color="#F4F4F4" />
          <Text style={styles.buttonTitle}>File</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CellInfo')}>
          <Icon name="tint" size={40} color="#F4F4F4" />
          <Text style={styles.buttonTitle}>Cell Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')}>
          <Icon name="info" size={40} color="#F4F4F4" />
          <Text style={styles.buttonTitle}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
  headerGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 70,
  },
  buttonGroup: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-start',
    height: 390,
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
    color: '#F4F4F4',
    fontWeight: '600',
    paddingTop: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    backgroundColor: '#273D5B',
    padding: 10,
    margin: 10,
    borderRadius: 25,
  },
});

export default Home;
