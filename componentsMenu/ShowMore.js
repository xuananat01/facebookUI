import React from 'react';
import {
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    icon: 'logo-octocat',
    iconColor: '#fe8764',
    title: 'Avatar',
    icon1: 'pricetag',
    iconColor1: '#050505',
    title1: 'Facebook Pay',
  },
  {
    id: 2,
    icon: 'trophy',
    iconColor: '#feb415',
    title: 'Game giả tưởng',
    icon1: 'chatbubble',
    iconColor1: '#C4de2f',
    title1: 'Messenger nhí',
  },
  {
    id: 3,
    icon: 'journal',
    iconColor: '#Dea12f',
    title: 'Ưu đãi',
    icon1: 'videocam',
    iconColor1: '#De632f',
    title1: 'Video trực tiếp',
  },
];

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

const ShowMore = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem(item)}
    />
  );
};

export default ShowMore;

const styles = StyleSheet.create({
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
