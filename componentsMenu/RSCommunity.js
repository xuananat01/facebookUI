import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const RSCommunity = () => {
  return (
    <View
      style={{flexDirection: 'column', justifyContent: 'space-between', width}}>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', width}}>
        <TouchableOpacity
          style={[styles.detailView, {marginLeft: 15, flex: 0.485}]}>
          <Ionic name="heart-circle" color="#eb465b" size={24} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 5,
            }}>
            Chiến dịch gây quỹ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.detailView, {marginRight: 15, flex: 0.485}]}>
          <Ionic name="help-buoy" color="#2599e9" size={24} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 5,
            }}>
            Ứng phó khẩn cấp
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 0.49}}>
          <TouchableOpacity style={[styles.detailView, {marginLeft: 15}]}>
            <Ionic name="partly-sunny" color="#40cc5e" size={26} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 5,
              }}>
              Trung tâm khoa học khí hậu
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.49}}>
          <TouchableOpacity style={[styles.detailView, {marginRight: 15}]}>
            <Ionic name="water" color="#f65a75" size={26} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 5,
              }}>
              Hiến máu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '49%',
          marginLeft: '51%',
          position: 'relative',
          top: -15,
        }}>
        <TouchableOpacity style={[styles.detailView, {marginRight: 15}]}>
          <Ionic name="heart-half" color="#fbc236" size={26} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 5,
            }}>
            Sức khỏe cảm xúc
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RSCommunity;

const styles = StyleSheet.create({
  detailView: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 4,
  },
});
