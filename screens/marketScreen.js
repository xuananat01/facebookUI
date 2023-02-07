import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import ListProduct from '../componentsMarket/ListProduct';

import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const MarketScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{width, flexDirection: 'row', paddingBottom: 10}}>
        <Text style={styles.txtTitle}>Marketplace</Text>
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
        <ListProduct />
      </ScrollView>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    // backgroundColor:'red',
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
