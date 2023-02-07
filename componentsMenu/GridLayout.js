import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const GridLayout = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{flexDirection: 'column', justifyContent: 'space-between', width}}>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', width}}>
        <TouchableOpacity
          style={[styles.detailView, {marginLeft: 15, flex: 0.485}]}
          onPress={() => navigation.navigate('PeopleScreen')}>
          <Ionic name="people-circle" size={28} color="#197ff4" />
          <Text style={styles.txtTob}>Nhóm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.detailView, {marginRight: 15, flex: 0.485}]}>
          <Ionic name="today" size={28} color="#197ff4" />
          <Text style={styles.txtTob}>Bảng feed</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', width}}>
        <TouchableOpacity
          style={[styles.detailView, {marginLeft: 15, flex: 0.485}]}>
          <Ionic name="people" size={28} color="#197ff4" />
          <Text style={styles.txtTob}>Bạn bè</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.detailView, {marginRight: 15, flex: 0.485}]}>
          <Ionic name="briefcase" size={28} color="#197ff4" />
          <Text style={styles.txtTob}>Marketplace</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', width}}>
        <TouchableOpacity
          style={[styles.detailView, {marginLeft: 15, flex: 0.485}]}>
          <Ionic name="film" size={28} color="#197ff4" />
          <Text style={styles.txtTob}>Video trên watch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.detailView, {marginRight: 15, flex: 0.485}]}>
          <Ionic name="hourglass" size={28} color="#197ff4" />
          <Text style={styles.txtTob}>Kỷ niệm</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', width}}>
        <TouchableOpacity
          style={[styles.detailView, {marginLeft: 15, flex: 0.485}]}>
          <Ionic name="card" size={28} color="#fa5f85" />
          <Text style={styles.txtTob}>Reels</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.detailView, {marginRight: 15, flex: 0.485}]}>
          <Ionic name="calendar" size={28} color="#eb415e" />
          <Text style={styles.txtTob}>Sự kiện</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', width}}>
        <TouchableOpacity
          style={[styles.detailView, {marginLeft: 15, flex: 0.485}]}>
          <Ionic name="game-controller" size={28} color="#209bf2" />
          <Text style={styles.txtTob}>Chơi game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.detailView, {marginRight: 15, flex: 0.485}]}>
          <Ionic name="book" size={28} color="#209bf2" />
          <Text style={styles.txtTob}>Stories</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GridLayout;

const styles = StyleSheet.create({
  flGrid: {
    marginTop: 10,
  },
  detailView: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 4,
  },
  txtTob: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
