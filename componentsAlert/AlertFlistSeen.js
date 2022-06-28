import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'react-native-gesture-bottom-sheet';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    uriAvt:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt41c476486b063ef8/60ee13df31f9ee2ab08a4dfe/Yasuo_0.jpg',
    colors: ['#1fb6ff', '#128ae8', '#106cf0'],
    iconAvt: 'book',
    txtName: 'Yasuo, Yone',
    txtDefault: 'và ',
    txtName1: 'Garen ',
    txtDefault1: 'đã đăng tin mới. Bạn sẽ bày tỏ cảm xúc gì vậy?',
    txtDefault2: '',
    time: '39',
    txtTime: 'phút trước',
    selected: false,
  },
  {
    id: 2,
    uriAvt: 'https://cdn.bongdaplus.vn/Assets/Media/2020/07/08/66/yasuo0.jpg',
    colors: ['#6ce188', '#46ce66', '#1eb247'],
    iconAvt: 'chatbox',
    txtName: 'Yasuo',
    txtDefault: '',
    txtName1: '',
    txtDefault1: 'đã bình luận về bài viết của anh ấy.',
    txtDefault2: '',
    time: '1',
    txtTime: 'phút trước',
    selected: false,
  },
  {
    id: 3,
    uriAvt:
      'https://gamek.mediacdn.vn/133514250583805952/2020/7/25/spiritblossomyone-1595643436107872262570.jpg',
    colors: ['#1fb6ff', '#128ae8', '#106cf0'],
    iconAvt: 'thumbs-up',
    txtName: 'Leona',
    txtDefault: 'đã thích bài biết của bạn trong ',
    txtName1: '',
    txtDefault1: '',
    txtDefault2: 'Cộng đồng Liên Minh Huyền Thoại.',
    time: '1',
    txtTime: 'giờ trước',
    selected: false,
  },
  {
    id: 4,
    uriAvt:
      'https://znews-photo.zingcdn.me/w660/Uploaded/obbabun/2020_03_29/miss_fortune_1_768x447.jpg',
    colors: ['#fe6582', '#f74360', '#ec2746'],
    iconAvt: 'heart',
    txtName: 'Diana',
    txtDefault: 'đã bày tỏ cảm xúc về bình luận của bạn: ',
    txtName1: '',
    txtDefault1: 'Hahaha cố lên bạn ơi',
    txtDefault2: '',
    time: '1',
    txtTime: 'giờ trước',
    selected: false,
  },
];

const AlertFlistSeen = () => {
  const [onPressInActive, SetOnPressInActive] = useState(null);

  // bottomModal
  const sheetRef = useRef(null);
  // FlatList
  const ListHeaderComponent = () => {
    return (
      <View style={{backgroundColor: '#ffffff'}}>
        <Text style={styles.txtNew}>Trước đó</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.container,
            {
              backgroundColor:
                item.id === onPressInActive ? '#ebebeb' : '#FFFFFF',
            },
          ]}
          activeOpacity={1}
          onPressIn={() => SetOnPressInActive(item.id)}
          onPressOut={() => SetOnPressInActive('#ebebeb')}
          onLongPress={() => sheetRef.current.show()}>
          <View style={styles.alertStory}>
            <Image style={styles.imgAvt} source={{uri: item.uriAvt}} />
            <LinearGradient colors={item.colors} style={styles.icon}>
              <Ionic name={item.iconAvt} size={16} color="#feffff" />
            </LinearGradient>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={styles.txtContent}
                numberOfLines={3}
                ellipsizeMode="tail">
                {<Text style={styles.txtWord}>{item.txtName}</Text>}{' '}
                {<Text>{item.txtDefault}</Text>}
                {<Text style={styles.txtWord}>{item.txtName1}</Text>}
                {<Text>{item.txtDefault1}</Text>}
                {<Text style={styles.txtWord}>{item.txtDefault2}</Text>}
              </Text>
              <Text style={{paddingLeft: 15, color: '#5d646c'}}>
                {<Text>{item.time}</Text>} {<Text>{item.txtTime}</Text>}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.tob}
              onPress={() => sheetRef.current.show()}>
              <Ionic name="ellipsis-horizontal" size={20} color="#000308" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        extraData={onPressInActive}
        scrollEnabled={false}
        ListHeaderComponent={ListHeaderComponent}
      />
      <BottomSheet
        draggable={true}
        hasDraggableIcon
        ref={sheetRef}
        height={height / 3}>
        <Text>Test</Text>
      </BottomSheet>
    </View>
  );
};

export default AlertFlistSeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  alertStory: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  alertLike: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  alertComment: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  imgAvt: {
    width: 65,
    height: 65,
    borderRadius: 40,
    marginTop: 8,
    resizeMode: 'cover',
  },
  icon: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: '#1a9efd',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 45,
    left: 55,
    shadowColor: '#000',
    elevation: 1,
  },
  txtContent: {
    width: width / 1.6,
    paddingLeft: 15,
    marginTop: 5,
    color: '#08090e',
    fontSize: 15,
    lineHeight: 21,
  },
  txtWord: {
    fontWeight: 'bold',
  },
  tob: {
    position: 'absolute',
    right: 15,
    top: 8,
  },
  txtNew: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#060606',
    marginVertical: 10,
    marginLeft: 15,
  },
});
