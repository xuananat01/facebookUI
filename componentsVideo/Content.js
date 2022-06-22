import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const data1 = [
  {
    id: 1,
    uriAvt:
      'https://static1-es.millenium.gg/articles/3/43/55/3/@/227198-ekko-firelight-article_m-1.jpg',
    txtTitle: 'Ekko',
    time: '1 giờ',
    ionic: 'earth',
    txtContent: '“Death is like the wind – always by my side.”',
    uriImg: 'https://lienminh.garena.vn/images/champions/skin/245_Ekko/0.jpg',
    like: '10.123',
    cmt: '2.345',
    share: '1.111',
    selected: false,
  },
  {
    id: 2,
    uriAvt:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3dafcae87ee7c45a/60ee0e8fa9af29474648beef/Katarina_0.jpg',
    txtTitle: 'Katarina',
    time: '32 phút',
    ionic: 'people-outline',
    txtContent: '“One to cut, one to seal.”',
    uriImg:
      'https://gamek.mediacdn.vn/133514250583805952/2021/12/27/photo-1-16405833139381809481395.jpg',
    like: '9.346',
    cmt: '3.126',
    share: '2.287',
    selected: false,
  },
  {
    id: 3,
    uriAvt: 'http://kuesports.net/wp-content/uploads/2021/10/Ashe.png',
    txtTitle: 'Ashe',
    time: '1 ngày',
    ionic: 'people-outline',
    txtContent: '“Fortune doesn’t favor fools.”',
    uriImg:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt5388dc09a75213a1/60ee0b7912cadb2032d63aa7/Classic_Ashe_Splash.jpg',
    like: '5.456',
    cmt: '465',
    share: '987',
    selected: false,
  },
  {
    id: 4,
    uriAvt: 'http://kuesports.net/wp-content/uploads/2021/10/Ashe.png',
    txtTitle: 'Ashe',
    time: '1 ngày',
    ionic: 'people-outline',
    txtContent: '“Fortune doesn’t favor fools.”',
    uriImg:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt5388dc09a75213a1/60ee0b7912cadb2032d63aa7/Classic_Ashe_Splash.jpg',
    like: '5.456',
    cmt: '465',
    share: '987',
    selected: false,
  },
];

const data2 = [
  {
    id: 1,
    uriAvt:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    txtTitle: 'Aurelion Sol',
    time: '1 giờ',
    ionic: 'earth',
    txtContent: '“Death is like the wind – always by my side.”',
    uriImg:
      'https://gamehot24h.com/wp-content/uploads/2019/07/Aurelion-Sol_1563939799.jpg',
    like: '10.123',
    cmt: '2.345',
    share: '1.111',
    selected: false,
  },
  {
    id: 2,
    uriAvt:
      'https://image.thanhnien.vn/w1024/Uploaded/2022/ernccqxwp/2020_02_13/thumb_gxpw.jpg',
    txtTitle: 'Lux',
    time: '32 phút',
    ionic: 'people-outline',
    txtContent: '“One to cut, one to seal.”',
    uriImg: 'https://cdn.tgdd.vn/2020/10/campaign/640-640x360-5.jpg',
    like: '9.346',
    cmt: '3.126',
    share: '2.287',
    selected: false,
  },
  {
    id: 3,
    uriAvt:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg',
    txtTitle: 'Kayn',
    time: '1 ngày',
    ionic: 'people-outline',
    txtContent: '“Fortune doesn’t favor fools.”',
    uriImg:
      'https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/kayn_8.jpg',
    like: '5.456',
    cmt: '465',
    share: '987',
    selected: false,
  },
  {
    id: 4,
    uriAvt:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg',
    txtTitle: 'Kayn',
    time: '1 ngày',
    ionic: 'people-outline',
    txtContent: '“Fortune doesn’t favor fools.”',
    uriImg:
      'https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/kayn_8.jpg',
    like: '5.456',
    cmt: '465',
    share: '987',
    selected: false,
  },
];

const Content = props => {
  // const [selected, setSelected] = useState(0);
  const [select, setSelect] = useState([data1, data2]);
  const [data, setData] = useState([]);

  //multi pick
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

  useEffect(() => {
    switch (props.title) {
      case 'Dành cho bạn':
        setData(data1);
        setSelect(data1);
        break;
      case 'Trực tiếp':
        setData(data2);
        setSelect(data2);
        break;
      default:
        break;
    }
  }, [props.title]);

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
            onPress={() => handleOnpress(item)}>
            <Ionic
              name={item.selected ? 'thumbs-up' : 'thumbs-up-outline'}
              size={22}
              color={item.selected ? '#1878f3' : '#66676b'}
            />
            <Text
              style={[
                styles.txtLike,
                {color: item.selected ? '#1878f3' : '#66676b'},
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
      renderItem={item => renderItem(item)}
      keyExtractor={item => item.id}
      data={(data, select)}
    />
  );
};

export default Content;

const styles = StyleSheet.create({
  line: {
    width,
    height: 1,
    backgroundColor: '#ccccce',
    marginTop: 5,
  },
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
