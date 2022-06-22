import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';
import Foryou from '../componentsPeople/Foryou';
import Play from '../componentsPeople/Play'

const {width, height} = Dimensions.get('window');


const peopleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{width, flexDirection: 'row', paddingBottom: 10}}>
        <Text style={styles.txtTitle}>Chơi game</Text>
        <View style={styles.ionic}>
          <TouchableOpacity style={styles.tobIonic}>
            <Ionic name="person" size={24} color="#060606" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tobIonic}>
            <Ionic name="search" size={24} color="#060606" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <Foryou />
      </ScrollView>
    </View>
  );
};

export default peopleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // flexDirection: 'column'
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
    right: 10,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tobIonic: {
    backgroundColor: '#e6e7ec',
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
