import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Ionic from 'react-native-vector-icons/Ionicons';

import homeScreen from '../homeScreen';
import videoScreen from '../videoScreen';
import marketScreen from '../marketScreen';
import peopleScreen from '../peopleScreen';
import alertScreen from '../alertScreen';
import menuScreen from '../menuScreen';

const {width, height} = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();

const AppNav = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#1878f3',
              fontSize: 32,
              fontWeight: 'bold',
              padding: 10,
            }}>
            Facebook
          </Text>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 10,
              top: 10,
            }}>
            <TouchableOpacity
              style={{
                width: 45,
                height: 45,
                borderRadius: 30,
                backgroundColor: '#f1f2f6',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 7,
              }}>
              <Ionic name="search" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 45,
                height: 45,
                borderRadius: 30,
                backgroundColor: '#f1f2f6',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 7,
              }}>
              <Ionic name="chatbubble" size={26} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            elevation:2,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Ionic
                size={25}
                name={focused ? 'home' : 'home-outline'}
                color={focused ? '#1878f3' : 'black'}
              />
            ),
          }}
          component={homeScreen}
          name="home"
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Ionic
                size={25}
                name={focused ? 'tv' : 'tv-outline'}
                color={focused ? '#1878f3' : 'black'}
              />
            ),
          }}
          component={videoScreen}
          name="video"
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Ionic
                size={25}
                name={focused ? 'person-circle' : 'person-circle-outline'}
                color={focused ? '#1878f3' : 'black'}
              />
            ),
          }}
          component={marketScreen}
          name="market"
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Ionic
                size={25}
                name={focused ? 'people' : 'people-outline'}
                color={focused ? '#1878f3' : 'black'}
              />
            ),
          }}
          component={peopleScreen}
          name="people"
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Ionic
                size={25}
                name={focused ? 'notifications' : 'notifications-outline'}
                color={focused ? '#1878f3' : 'black'}
              />
            ),
          }}
          component={alertScreen}
          name="alert"
        />
        <Tab.Screen
          options={{
            title: ({color, focused}) => (
              <Ionic
                size={25}
                name={focused ? 'menu' : 'menu-outline'}
                color={focused ? '#1878f3' : 'black'}
              />
            ),
          }}
          component={menuScreen}
          name="menu"
        />
      </Tab.Navigator>
    </View>
  );
};

export default AppNav;

const styles = StyleSheet.create({
  vwHeader: {
    flexDirection: 'row',
    width,
  },
  txtTitle: {
    color: '#1878f3',
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  tobFind: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#f1f2f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
