import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';


const menuScreen = () => {
  return (
    <View style={styles.container}>
        <Text>menuScreen</Text>
    </View>
  );
};

export default menuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});
