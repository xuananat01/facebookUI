import React from 'react';
import {Text, View, StyleSheet, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Data = [
  {
    id: 1,
    icon: 'people-circle',
    iconColor: '#197ff4',
    title: 'Nhóm',
    icon1: 'today',
    iconColor1: '#197ff4',
    title1: 'Bảng feed',
  },
  {
    id: 2,
    icon: 'people',
    iconColor: '#197ff4',
    title: 'Bạn bè',
    icon1: 'briefcase',
    iconColor1: '#197ff4',
    title1: 'Marketplace',
  },
  {
    id: 3,
    icon: 'film',
    iconColor: '#197ff4',
    title: 'Video trên watch',
    icon1: 'hourglass',
    iconColor1: '#197ff4',
    title1: 'Kỷ niệm',
  },
  {
    id: 4,
    icon: 'bookmark',
    iconColor: '#9a37c8',
    title: 'Đã lưu',
    icon1: 'flag',
    iconColor1: '#ee692b',
    title1: 'Trang',
  },
  {
    id: 5,
    icon: 'card',
    iconColor: '#fa5f85',
    title: 'Reels',
    icon1: 'calendar',
    iconColor1: '#eb415e',
    title1: 'Sự kiện',
  },
  {
    id: 6,
    icon: 'game-controller',
    iconColor: '#209bf2',
    title: 'Chơi game',
    icon1: 'book',
    iconColor1: '#209bf2',
    title1: 'Stories',
  },
];
// const numColumns = 2;

const renderItem = item => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity style={[styles.detailView, {marginLeft: 15}]}>
        <Ionic name={item.item.icon} color={item.item.iconColor} size={22} />
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          {item.item.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.detailView, {marginRight: 15}]}>
        <Ionic name={item.item.icon1} color={item.item.iconColor1} size={22} />
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          {item.item.title1}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const GridLayout = () => {
  return (
    <FlatList
      data={Data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem(item)}
      //   numColumns={numColumns}
      style={styles.flGrid}
    />
  );
};

export default GridLayout;

const styles = StyleSheet.create({
  flGrid: {
    marginTop: 10,
  },
  detailView: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width,
    padding: 15,
    flex: 0.485,
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
});
