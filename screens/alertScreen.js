import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import Ionic from 'react-native-vector-icons/Ionicons';
import AlertFlistNotSeen from '../componentsAlert/AlertFlistNotSeen';
import AlertFlistSeen from '../componentsAlert/AlertFlistSeen';
import BottomSheet from '../componentsModal/BottomSheet';

const alertScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{width, flexDirection: 'row', paddingBottom: 10}}>
        <Text style={styles.txtTitle}>Thông báo</Text>
        <View style={styles.ionic}>
          <TouchableOpacity style={styles.tobIonic}>
            <Ionic name="search" size={24} color="#060606" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <AlertFlistNotSeen />
        <AlertFlistSeen />
      </ScrollView>
      {/* <BottomSheet /> */}
    </View>
  );
};

export default alertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: '#000000',
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
  txtNew: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#060606',
    marginVertical: 10,
    marginLeft: 15,
  },
});
