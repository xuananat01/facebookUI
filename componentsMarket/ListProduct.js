import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FlContent from '../componentsMarket/FlContent';

import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const ListProduct = () => {
  return (
    <View style={styles.vw}>
      <View style={styles.vwTob}>
        <TouchableOpacity style={styles.tob}>
          <Ionic name="create-outline" size={18} color="#000005" />
          <Text style={styles.sellCategories}>Bán</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tob}>
          <Ionic
            name="list-outline"
            size={20}
            color="#000005"
            style={{paddingTop: 1}}
          />
          <Text style={styles.sellCategories}>Hạng mục</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View
        style={{
          flexDirection: 'row',
          width,
          paddingHorizontal: '4%',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#101010'}}>
          Lựa chọn hôm nay
        </Text>
        <TouchableOpacity style={styles.tobLocation}>
          <Ionic
            name="location"
            size={16}
            color="#1779f2"
            style={{paddingRight: 5}}
          />
          <Text style={{fontSize: 16, color: '#1779f2'}}>Hà Đông</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'space-around'}}>

      <FlContent />
      </View>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  vw: {
    flex: 1,
    backgroundColor: '#ffffff',
    // backgroundColor: 'red',
  },
  vwTob: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  tob: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#e6e7ec',
    flexDirection: 'row',
  },
  sellCategories: {
    fontSize: 16,
    fontFamily: 'medium',
    color: '#000005',
    paddingVertical: 7,
    paddingHorizontal: 3,
  },
  line: {
    width: '92%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#e6e7ec',
  },
  tobLocation: {
    flexDirection: 'row',
    position: 'absolute',
    right: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
