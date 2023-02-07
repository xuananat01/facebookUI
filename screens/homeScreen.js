import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import ToolBar from '../componentsHome/ToolBar';
import Feed from '../componentsHome/Feed';
import StoryTab from '../componentsHome/StoryTab';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.homeScreen}>
      <ToolBar />
      <StoryTab />
      <Feed />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
