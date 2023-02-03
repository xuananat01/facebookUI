import React from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');

// const numColums = 2;
const data = [
  {
    id: 1,
    uriImg: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money: '250.000',
    txtUnderline: '$',
    txtInformation: 'lambo1',
    uriImg1: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money1: '250.000',
    txtInformation1: 'lambo1',
  },
  {
    id: 2,
    uriImg: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money: '250.000',
    txtUnderline: '$',
    txtInformation: 'lambo2',
    uriImg1: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money1: '250.000',
    txtInformation1: 'lambo2',
  },
  {
    id: 3,
    uriImg: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money: '250.000',
    txtUnderline: '$',
    txtInformation: 'super car',
    uriImg1: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money1: '250.000',
    txtInformation1: 'lambo1',
  },
  {
    id: 4,
    uriImg: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money: '250.000',
    txtUnderline: '$',
    txtInformation: 'audi car',
    uriImg1: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money1: '250.000',
    txtInformation1: 'lambo1',
  },
  {
    id: 5,
    uriImg: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money: '250.000',
    txtUnderline: '$',
    txtInformation: 'bwm car',
    uriImg1: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money1: '250.000',
    txtInformation1: 'lambo1',
  },
  {
    id: 6,
    uriImg: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money: '250.000',
    txtUnderline: '$',
    txtInformation: 'bentley car',
    uriImg1: 'https://static.automotor.vn/images/upload/2021/06/16/lambo.jpeg',
    money1: '250.000',
    txtInformation1: 'lambo1',
  },
];

const FlContent = () => {
  const renderItem = item => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 0.49}}>
          <Image style={styles.img} source={{uri: item.item.uriImg}} />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 5,
              marginBottom: 15,
            }}>
            <Text style={styles.txtInfor}>{item.item.money}</Text>
            <Text style={styles.txtInfor}>{item.item.txtUnderline}</Text>
            <Text style={styles.txtDots}>.</Text>
            <Text style={styles.txtInfor}>{item.item.txtInformation}</Text>
          </View>
        </View>
        <View style={{flex: 0.49}}>
          <Image style={styles.img} source={{uri: item.item.uriImg1}} />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              marginTop: 5,
              marginBottom: 15,
            }}>
            <Text style={styles.txtInfor}>{item.item.money1}</Text>
            <Text style={styles.txtInfor}>{item.item.txtUnderline}</Text>
            <Text style={styles.txtDots}>.</Text>
            <Text style={styles.txtInfor}>{item.item.txtInformation1}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={{marginBottom: 60}}
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem(item)}
      scrollEnabled={false}
      // numColumns={numColums}
    />
  );
};

export default FlContent;

const styles = StyleSheet.create({
  img: {
    width: width / 2,
    height: height / 4,
    resizeMode: 'stretch',
  },
  txtInfor: {
    fontSize: 15,
    color: '#101010',
    paddingHorizontal: 2,
  },
  txtDots: {
    position: 'relative',
    bottom: 3,
    color: '#101010',
    paddingHorizontal: 2,
  },
});
