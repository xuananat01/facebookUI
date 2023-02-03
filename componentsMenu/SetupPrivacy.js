import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const HelpSuppot = () => {
  return (
    <View style={{flexDirection: 'column', marginBottom: 10}}>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="person-circle" size={28} color="#a8b1b7" />
        <Text style={styles.txtTob}>Cài đặt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="lock-closed" size={28} color="#47565b" />
        <Text style={styles.txtTob}>Lối tắt quyền riêng tư</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="time" size={28} color="#b2c3cd" />
        <Text style={styles.txtTob}>Thời gian bạn ở trên facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="phone-portrait" size={28} color="#a3b0b5" />
        <Text style={styles.txtTob}>Yêu cầu từ thiết bị</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="easel" size={28} color="#a3b0b5" />
        <Text style={styles.txtTob}>Hoạt động quảng cáo gần đây</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="wifi" size={28} color="#a3b0b5" />
        <Text style={styles.txtTob}>Hiệu suất Wi-Fi & mạng di động</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="moon" size={28} color="#a3b0b5" />
        <Text style={styles.txtTob}>Chế độ tối</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="globe" size={28} color="#a3b0b5" />
        <Text style={styles.txtTob}>Ngôn ngữ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="calculator" size={28} color="#a3b0b5" />
        <Text style={styles.txtTob}>Mức độ sử dụng dữ liệu di động</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tobChoose, {flexDirection: 'row'}]}>
        <Ionic name="key" size={28} color="#a3b0b5" />
        <Text style={styles.txtTob}>Trình tạo mã</Text>
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
