import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet,View} from 'react-native';
import AppNav from './screens/navigation/AppNav';

const App = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
