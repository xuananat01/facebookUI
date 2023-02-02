import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Content from '../componentsVideo/Content';

const {width, height} = Dimensions.get('window');

const tabs = ['Dành cho bạn', 'Trực tiếp', 'Chơi game', 'Đang theo dõi'];

const ScrollTitle = () => {
  const [selected, setSelected] = useState(0);
  const [title, setTitle] = useState([0]);

  const gotoTab = (i) => {
    setSelected(i);
    setTitle(tabs[i]);
    renderChose();
  };

  const renderChose = () => {
    return <Content title={title} />;
  };

  return (
    <View>
      <ScrollView horizontal style={styles.srcTop} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} >
        <View style={styles.vwScroll}>
          {tabs.map((e, i) => (
            <TouchableOpacity
              style={[
                styles.tobTitle,
                selected == i && {backgroundColor: '#e8f3fd'},
              ]}
              onPress={() => gotoTab(i)}>
              <Text
                style={[styles.txtTitle, selected == i && {color: '#226dd3'}]}>
                {e}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {renderChose()}
    </View>
  );
};

export default ScrollTitle;

const styles = StyleSheet.create({
  srcTop: {
    marginTop: 10,
    marginBottom: 15,
    width,
    height: 40,
  },
  vwScroll: {
    flexDirection: 'row',
    height: 34,
    marginHorizontal: 10,
  },
  tobTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  txtTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0b0b0b',
  },
});
