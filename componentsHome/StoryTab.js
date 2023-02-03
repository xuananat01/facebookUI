import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Story from './Story';
import Feed from './Feed';

const {width, height} = Dimensions.get('window');

const tabs = ['Tin', 'Reels', 'Phòng họp...'];

const StoryTab = () => {
  const [selected, setSelected] = useState(0);
  const [title, setTitle] = useState(tabs[0]);

  const gotoTab = i => {
    setSelected(i);
    setTitle(tabs[i]);
    renderStory(); //render lại view với title mới
  };

  const renderStory = () => {
    return <Story title={title} />;
  };

  return (
    <View style={[styles.vwContainer, {overflow: 'hidden', paddingBottom: 5}]}>
      <View style={styles.vwHeader}>
        {tabs.map((e, i) => (
          <TouchableOpacity style={styles.tobTitle} onPress={() => gotoTab(i)}>
            <Text
              style={[styles.txtTitle, selected === i && {color: '#1a62ca'}]}>
              {e}
            </Text>
            {selected === i && <View style={styles.line} />}
          </TouchableOpacity>
        ))}
      </View>
      {renderStory()}
      <View
        style={{width, height: 15, backgroundColor: '#c9ccd1', marginTop: 15}}
      />
    </View>
  );
};

export default StoryTab;

const styles = StyleSheet.create({
  vwContainer: {},
  vwHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    height: 45,
    shadowColor: '#000',
    elevation: 4,
    backgroundColor: '#fff',
  },
  tobTitle: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: '#1a62ca',
    borderRadius: 2,
    position: 'absolute',
    bottom: 0,
  },
});
