import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Friend = () => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          width,
          marginTop: 10,
        }}>
        Bạn bè
      </Text>
      <View style={{flexDirection: 'row', padding: 20, marginTop: 10}}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 14,
            paddingVertical: 10,
            backgroundColor: '#e6e7ec',
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Gợi ý
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 14,
            paddingVertical: 10,
            backgroundColor: '#e6e7ec',
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Bạn bè
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{height: 1, backgroundColor: '#d0d0d0', marginHorizontal: 20}}
      />
    </ScrollView>
  );
};

export default Friend;

const styles = StyleSheet.create({});
