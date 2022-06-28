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
      'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/118692869_2741914472756710_110275499777702941_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EBPyglwMUfwAX-qI3ub&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8cfGeR_bbmmeVEwKyRMpHMbKZajs6xoCWeuz5T6sITbw&oe=62DEE03E',
    icon: 'flag',
    iconColor: '#ec682c',
    txtName: 'VTV Giải trí',
  },
  {
    id: 2,
    uriImg:
      'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/94259806_2635789610035864_7766076443477409792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=cHi4pXeUttAAX8emQOT&tn=ngU6Do8Xqa4mJ8hO&_nc_ht=scontent.fhan14-2.fna&oh=00_AT9EWd3VC7_6eA6VzcgEccCi0nnQtf8G6KGe2JXoZi6yFg&oe=62DFCF90',
    icon: 'flag',
    iconColor: '#ec682c',
    txtName: 'VNE',
  },
  {
    id: 3,
    uriImg:
      'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/94269020_2635789433369215_8410872809814753280_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=5wjcxoABbP4AX9JtNoQ&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-Hhf70U8NLL5Zwxggg4RcDCSmbvyBGAT692sD92dGheQ&oe=62DF27C5',
    icon: 'people-sharp',
    iconColor: '#25aff9',
    txtName: 'Realme Việt Nam',
  },
  {
    id: 4,
    uriImg:
      'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/88955687_2591181534496672_6497212709031903232_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=HF2mNFSVvKIAX89CUQ8&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-xTZY07yZnHb4OhK4hBQcxZuOzdAgWchEf9CzNk09hOA&oe=62E0D604',
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
