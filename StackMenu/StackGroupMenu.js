import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import GridLayout from '../componentsMenu/GridLayout';
import PeopleScreen from '../screens/PeopleScreen';

const Stack = createStackNavigator();

const StackGroupMenu = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="people" component={PeopleScreen} />
        <Stack.Screen name="GridLayout" component={GridLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackGroupMenu;

const styles = StyleSheet.create({});
