import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const ToolBar = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image style={styles.img} source={require('../image/user.jpg')} />
        <View style={styles.vwIcon}>
          <Ionic name="happy" size={16} color="#f7b928" />
        </View>
        <TextInput
          style={styles.txtInput}
          placeholder="Bạn đang nghĩ gì?"
          placeholderTextColor="black"></TextInput>
        <TouchableOpacity style={{position: 'absolute', right: 20, top: 5}}>
          <Ionic name="images-outline" color="#45be62" size={26} />
        </TouchableOpacity>
      </View>
      <View
        style={{width, height: 15, backgroundColor: '#c9ccd1', marginTop: 15}}
      />
    </View>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 40 / 2,
    marginLeft: 10,
  },
  vwIcon: {
    position: 'relative',
    top: 23,
    left: -17,
    width: 18,
    height: 18,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    height: 38,
    borderRadius: 20,
    borderWidth: 1,
    width: width / 1.54,
    borderColor: '#caccd0',
    color: 'black',
    paddingHorizontal: 20,
    fontSize: 15,
    marginLeft: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
