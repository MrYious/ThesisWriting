import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Initial = createNativeStackNavigator();

const App = () => {
  return (
    // Main Routes
    <NavigationContainer>
      <Initial.Navigator>
        {/* Screen 1 */}
        <Initial.Screen
          name="Initial"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        {/* Screen 2 */}
        <Initial.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Initial.Navigator>
    </NavigationContainer>
  );
};

const InitialScreen = ({navigation}) => {
  return (
    // Initial Screen
    <View style={styles.mainContainer}>
      <View style={styles.headerGroup}>
        <Image source={require('./images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>BLOODSIGHT</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonTitle}>START</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.temp} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  headerGroup: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    flex: 1,
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 60,
    backgroundColor: '#273D5B',
    padding: 10,
    marginTop: 40,
    borderRadius: 30,
  },
});

export default App;
