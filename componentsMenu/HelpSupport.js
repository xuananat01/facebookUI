import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const HelpSuppot = () => {
  return (
    <View style={{flexDirection: 'column', marginBottom: 10}}>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="aperture" size={28} color="#a8b1b7" />
        <Text style={styles.txtTob}>Trung tâm trợ giúp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="file-tray-full" size={28} color="#47565b" />
        <Text style={styles.txtTob}>Hộp thư hỗ trợ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="warning" size={28} color="#b2c3cd" />
        <Text style={styles.txtTob}>Báo cáo sự cố</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="newspaper" size={28} color="#a3b0b5" />
        <Text style={styles.txtTob}>Điều khoản & chính sách</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpSuppot;

const styles = StyleSheet.create({
  tobChoose: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 4,
    alignItems: 'center',
  },
  txtTob: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
});
