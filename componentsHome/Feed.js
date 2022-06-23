import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Data = [
  {
    id: 1,
    uriAvt:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt41c476486b063ef8/60ee13df31f9ee2ab08a4dfe/Yasuo_0.jpg',
    txtTitle: 'Yasuo',
    time: '1 giờ',
    ionic: 'earth',
    txtContent: '“Death is like the wind – always by my side.”',
    uriImg: 'https://cdn.bongdaplus.vn/Assets/Media/2020/07/08/66/yasuo0.jpg',
    like: '10.123',
    cmt: '2.345',
    share: '1.111',
    selected: false,
  },
  {
    id: 2,
    uriAvt:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3cefcd6544df9e5d/60ee13e4810a0e49eabfd0be/yone-splash.jpg',
    txtTitle: 'Yone',
    time: '32 phút',
    ionic: 'people-outline',
    txtContent: '“One to cut, one to seal.”',
    uriImg:
      'https://gamek.mediacdn.vn/133514250583805952/2020/7/25/spiritblossomyone-1595643436107872262570.jpg',
    like: '9.346',
    cmt: '3.126',
    share: '2.287',
    selected: false,
  },
  {
    id: 3,
    uriAvt:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc6e788b11a9c8245/60ee0f71a86d0f5a0be449a3/MissFortune_0.jpg',
    txtTitle: 'Miss Fortune',
    time: '1 ngày',
    ionic: 'people-outline',
    txtContent: '“Fortune doesn’t favor fools.”',
    uriImg:
      'https://znews-photo.zingcdn.me/w660/Uploaded/obbabun/2020_03_29/miss_fortune_1_768x447.jpg',
    like: '5.456',
    cmt: '465',
    share: '987',
    selected: false,
  },
];

const Feed = () => {
  const [select, setSelect] = useState(Data);
  const handleOnpress = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.vwAvatar}>
          <Image source={{uri: item.uriAvt}} style={styles.avatar} />
          <View style={{width, marginLeft: 10}}>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                top: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.txtTitle}>{item.txtTitle}</Text>
              <Ionic
                name="checkmark-circle"
                size={14}
                color="#1878f3"
                style={{paddingLeft: 3}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.time}>{item.time}</Text>
              <Ionic name={item.ionic} size={14} style={{paddingLeft: 5}} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: 5,
            right: 10,
          }}>
          <Ionic
            name="ellipsis-horizontal"
            size={26}
            style={{paddingRight: 20}}
          />
          <Ionic name="close" size={28} />
        </View>
        <Text style={styles.txtContent}>{item.txtContent}</Text>
        <Image style={styles.imgContent} source={{uri: item.uriImg}} />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderColor: '#ffffff',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1878f3',
            }}>
            <Ionic
              name="thumbs-up"
              size={10}
              color="white"
              style={{position: 'absolute'}}
            />
          </View>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'normal',
              color: '#65676a',
              marginLeft: 5,
            }}>
            {item.like}
          </Text>
          <View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
            <Text style={{marginHorizontal: 2, fontSize: 13}}>{item.cmt}</Text>
            <Text style={{marginHorizontal: 2, fontSize: 13}}>bình luận</Text>
            <Text
              style={{
                marginHorizontal: 2,
                fontWeight: 'bold',
                fontSize: 13,
                paddingBottom: 5,
                position: 'relative',
                bottom: 3,
              }}>
              .
            </Text>
            <Text style={{marginHorizontal: 2, fontSize: 13}}>
              {item.share}
            </Text>
            <Text style={{marginHorizontal: 2, fontSize: 13}}>
              lượt chia sẻ
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '93%',
            height: 1,
            backgroundColor: '#e6e6e6',
            alignSelf: 'center',
            marginTop: 5,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => handleOnpress(item)}
            activeOpacity={1}>
            <Ionic
              name={item.selected ? 'thumbs-up' : 'thumbs-up-outline'}
              size={22}
              color={item.selected ? '#1878f3' : '#66676b'}
            />
            <Text
              style={[
                styles.txtLike,
                {
                  color: item.selected ? '#1878f3' : '#66676b',
                },
              ]}>
              Thích
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Ionic name="chatbox-outline" size={22} />
            <Text style={styles.txtLike}>Bình luận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Ionic name="arrow-redo-outline" size={22} />
            <Text style={styles.txtLike}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width,
            height: 13,
            backgroundColor: '#c9ccd1',
            marginTop: 10,
          }}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={select}
      renderItem={item => renderItem(item)}
      keyExtractor={item => item.id}
      scrollEnabled={false}
      horizontal={false}
    />
  );
};

export default Feed;

const styles = StyleSheet.create({
  vwAvatar: {
    flexDirection: 'row',
    width,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 10,
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#050505',
  },
  time: {
    fontSize: 14,
    color: '#65676a',
  },
  txtContent: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000',
    paddingHorizontal: 10,
  },
  imgContent: {
    width,
    height: 200,
    marginVertical: 5,
  },
  txtLike: {
    alignSelf: 'center',
    paddingLeft: 6,
  },
});
