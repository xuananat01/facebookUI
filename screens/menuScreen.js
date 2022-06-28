import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Shortcuts from '../componentsMenu/Shortcuts';

const {width, height} = Dimensions.get('window');

const menuScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{width, flexDirection: 'row', paddingBottom: 10}}>
          <Text style={styles.txtTitle}>Menu</Text>
          <View style={styles.ionic}>
            <TouchableOpacity style={styles.tobIonic}>
              <Ionic name="settings-sharp" size={24} color="#060606" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tobIonic}>
              <Ionic name="search" size={24} color="#060606" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{marginTop: 10, flexDirection: 'row'}}
          activeOpacity={0.8}>
          <Image source={require('../image/user4.jpg')} style={styles.imgAvt} />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}}>
              Nguyễn Xuân An
            </Text>
            <Text style={{fontSize: 16, color: '#66676d'}}>
              Xem trang cá nhân của bạn
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <Text style={styles.txtTitleBelow}>Lối tắt của bạn</Text>
      <Shortcuts />
    </ScrollView>
  );
};

export default menuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f7',
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: '#000000',
  },
  txtTitleBelow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 15,
    marginTop: 8,
  },
  ionic: {
    position: 'absolute',
    right: 10,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tobIonic: {
    backgroundColor: '#e6e7ec',
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  imgAvt: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 40 / 2,
    marginLeft: 15,
  },
  line: {
    width: '92%',
    height: 1,
    backgroundColor: '#dddee3',
    alignSelf: 'center',
    marginTop: 15,
  },
});
