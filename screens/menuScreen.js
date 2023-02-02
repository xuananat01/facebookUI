import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ionic from 'react-native-vector-icons/Ionicons';
import Shortcuts from '../componentsMenu/Shortcuts';
import GridLayout from '../componentsMenu/GridLayout';

const {width, height} = Dimensions.get('window');

const tabs = ['Nguyễn Xuân An', 'Nguyễn Thị Linh'];

const menuScreen = () => {
  const refRBSheet = useRef();

  const [selected, setSelected] = useState();

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
        <TouchableOpacity style={styles.tobInfor} activeOpacity={0.8}>
          <Image source={require('../image/user4.jpg')} style={styles.imgAvt} />
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}}>
              Nguyễn Xuân An
            </Text>
            <View style={{width: '50%', justifyContent: 'center'}}>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  justifyContent: 'center',
                  backgroundColor: '#E3e8ea',
                  alignItems: 'center',
                  position: 'absolute',
                  right: 10,
                }}
                onPress={() => refRBSheet.current.open()}>
                <Ionic
                  name="chevron-down-outline"
                  size={20}
                  color="black"
                  fontWeight="bold"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.txtTitleBelow}>Lối tắt của bạn</Text>
      <Shortcuts />
      <Text style={styles.txtTitleBelow}>Tất cả lối tắt</Text>
      <GridLayout />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
          },
          draggableIcon: {
            backgroundColor: '#e6e5e5',
            width: '12%',
          },
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Trang & trang cá nhân của bạn
          </Text>
          <Text
            style={{
              width: '92%',
              height: 1,
              backgroundColor: '#C9ccd1',
              marginTop: 15,
              marginBottom: 15,
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={require('../image/user4.jpg')}
              style={styles.imgAvt}
            />
            <Image
              source={require('../image/user1.jpg')}
              style={[styles.imgAvt, {marginTop: 15}]}
            />
          </View>
          <View style={{width: '85%'}}>
            {tabs.map((e, i) => (
              <TouchableOpacity
                style={{flexDirection: 'column'}}
                onPress={() => setSelected(i)}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 28,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000000',
                      marginLeft: 15,
                    }}>
                    {e}
                  </Text>
                  <Ionic
                    style={{position: 'absolute', right: 20}}
                    name={
                      selected == i
                        ? 'radio-button-on-outline'
                        : 'radio-button-off-outline'
                    }
                    color={selected == i ? 'blue' : '#C9ccd1'}
                    size={24}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
              style={{
                width: '92%',
                height: 1,
                backgroundColor: '#C9ccd1',
                marginBottom: 15,
              }}
            />
        </View>
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={[styles.imgAvt, {backgroundColor: '#C9ccd1', borderWidth: 1, borderColor: '#999993'}]} />
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 15, color:'black'}}>
            Đăng nhập bằng tài khoản khác
          </Text>
        </TouchableOpacity>
      </RBSheet>
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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 15,
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
  tobInfor: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 70,
    width: '92%',
    alignItems: 'center',
    margin: '4%',
    borderRadius: 8,
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
