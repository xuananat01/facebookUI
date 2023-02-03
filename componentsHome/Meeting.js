import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Meeting = () => {
  return (
    <View>
      <View
        style={{
          width: 108,
          height: '100%',
          borderRadius: 20,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 2.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.img} source={require('../image/user4.jpg')} />
        <Text style={styles.txtFooter}>Chia sẻ bản nhạc bạn yêu thích</Text>
      </View>
      <View
        style={{
          width: 108,
          height: '100%',
          borderRadius: 20,
          marginTop: 10,
          marginHorizontal: 2.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#caccd0',
        }}>
        <Image
          style={{
            height: '70%',
            position: 'absolute',
            top: 0,
            width: 108,
            resizeMode: 'cover',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          source={require('../image/user1.jpg')}
        />
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,
            backgroundColor: '#ffffff',
            position: 'absolute',
            bottom: 40,
          }}>
          <Ionic
            name="add-circle"
            size={38}
            color="#1877f4"
            style={{marginLeft: 2}}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            bottom: 5,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
          }}>
          Tạo tin
        </Text>
      </View>
      <View
        style={{
          width: 108,
          height: '100%',
          borderRadius: 20,
          marginTop: 10,
          marginHorizontal: 2.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.img} source={require('../image/user4.jpg')} />
        <Text style={styles.txtFooter}>Chia sẻ bản nhạc bạn yêu thích</Text>
      </View>
    </View>
  );
};

export default Meeting;

const styles = StyleSheet.create({
  img: {
    width: 108,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  txtFooter: {
    position: 'absolute',
    bottom: 5,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
