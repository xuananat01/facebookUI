import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

import ScrollTitle from '../componentsVideo/ScrollTitle'


const {width, height} = Dimensions.get('window');

const videoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{width, flexDirection: 'row'}}>
        <Text style={styles.txtTitle}>Watch</Text>
        <View style={styles.ionic}>
          <TouchableOpacity style={styles.tobIonic}>
            <Ionic name="person" size={24} color='#060606' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tobIonic}>
            <Ionic name="search" size={24} color='#060606' />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollTitle />
    </View>
  );
};

export default videoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 100,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: '#000000',
  },
  ionic: {
    position: 'absolute',
    right: 15,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tobIonic: {
    backgroundColor: '#e6e7ec',
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical:4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
});
