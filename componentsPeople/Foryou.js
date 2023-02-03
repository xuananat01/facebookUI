import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';

import FlAvtForyou from '../componentsPeople/FlAvtForyou';
import FlatListForyou from '../componentsPeople/FlatListForyou';

import Ionic from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const tabs = ['Dành cho bạn', 'Chơi', 'Video', 'Cộng đồng'];

const Foryou = () => {
  const [selected, setSelected] = useState(0);
  return (
    <View>
      <ScrollView horizontal style={styles.srcTop}>
        <View style={styles.vwScroll}>
          {tabs.map((e, i) => (
            <TouchableOpacity
              style={[
                styles.tobTitle,
                selected === i && {backgroundColor: '#e8f3fd'},
              ]}
              onPress={() => setSelected(i)}>
              <Text
                style={[styles.txtTitle, selected === i && {color: '#226dd3'}]}>
                {e}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.line} />
      <ScrollView
        horizontal
        style={{marginTop: 10}}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.vwTime}>
          <Ionic
            name="time"
            size={22}
            color="#060606"
            style={{paddingLeft: 1}}
          />
        </View>
        <FlAvtForyou />
      </ScrollView>
      <View
        style={{
          width,
          height: 13,
          backgroundColor: '#c9ccd1',
          marginTop: 10,
        }}
      />
      <FlatListForyou />
    </View>
  );
};

export default Foryou;

const styles = StyleSheet.create({
  srcTop: {
    marginTop: 5,
    marginBottom: 15,
    width,
  },
  vwScroll: {
    flexDirection: 'row',
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    // backgroundColor: 'blue',
  },
  txtTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0b0b0b',
    // paddingHorizontal: 3,
  },
  tobTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    paddingHorizontal: 16,
    borderRadius: 50,
  },
  line: {
    width: '92%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#e6e7ec',
  },
  vwTime: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    width: 27,
    height: 27,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#060606',
    marginRight: 5,
  },
});
