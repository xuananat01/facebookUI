import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: 1,
    uriImg:
      'https://images.unsplash.com/photo-1531416368398-ab7b33c61a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&w=1000&q=80',
    icon: 'flag',
    iconColor: '#ec682c',
    txtName: 'VTV Giải trí',
  },
  {
    id: 2,
    uriImg:
      'https://images.unsplash.com/photo-1445999794508-1e24b2f535ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIzNTgwN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=420&q=60',
    icon: 'flag',
    iconColor: '#ec682c',
    txtName: 'VNE',
  },
  {
    id: 3,
    uriImg:
      'https://media.istockphoto.com/id/1171769670/photo/lake-peyto-of-banff-national-park-in-canada.jpg?s=170667a&w=0&k=20&c=D7sdOO6BZdpAhzMq0swmTuTFY8EtASuf-rZw1n9OsjQ=',
    icon: 'people-sharp',
    iconColor: '#25aff9',
    txtName: 'Realme Việt Nam',
  },
  {
    id: 4,
    uriImg:
      'https://cdn.wallpapersafari.com/1/17/ZMBC10.jpg',
    icon: 'flag',
    iconColor: '#ec682c',
    txtName: 'Liên Minh Huyền Thoại',
  },
  {
    id: 5,
    uriImg:
      'https://znews-photo.zingcdn.me/w660/Uploaded/obbabun/2020_03_29/miss_fortune_1_768x447.jpg',
    icon: 'flag',
    iconColor: '#ec682c',
    txtName: 'BeatVN',
  },
  {
    id: 6,
    uriImg:
      'https://znews-photo.zingcdn.me/w660/Uploaded/obbabun/2020_03_29/miss_fortune_1_768x447.jpg',
    icon: 'people-sharp',
    iconColor: '#25aff9',
    txtName: 'CHỢ MÁY TÍNH CŨ',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tobAvt} activeOpacity={0.9}>
        <Image style={styles.imgAvt} source={{uri: item.uriImg}} />
        <View style={styles.ionic}>
          <Ionic name={item.icon} size={16} color={item.iconColor} />
        </View>
      </TouchableOpacity>
      <View style={styles.txtName}>
        <Text
          style={styles.txtInformation}
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.txtName}
        </Text>
      </View>
    </View>
  );
};

const Shortcuts = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem(item)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Shortcuts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  tobAvt: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 6,
  },
  imgAvt: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  ionic: {
    position: 'absolute',
    right: -5,
    bottom: -3,
    width: 24,
    height: 24,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 2,
  },
  txtName: {
    width: 75,
    marginLeft: 12,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInformation: {
    fontSize: 12,
    color: '#66676d',
    textAlign: 'center',
  },
});
