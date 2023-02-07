import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ionic from 'react-native-vector-icons/Ionicons';
import Shortcuts from '../componentsMenu/Shortcuts';
import GridLayout from '../componentsMenu/GridLayout';
import ShowMore from '../componentsMenu/ShowMore';
import RSCommunity from '../componentsMenu/RSCommunity';
import HelpSuppot from '../componentsMenu/HelpSupport';
import SetupPrivacy from '../componentsMenu/SetupPrivacy';

const {width, height} = Dimensions.get('window');

const tabs = ['Nguyễn Xuân An', 'Nguyễn Thị Linh'];

const MenuScreen = () => {
  const refRBSheet = useRef();
  //picker
  const [selected, setSelected] = useState();
  //showmore
  const [show, setShow] = useState(true);

  //show RSCommunity
  const [isShow, setIsShow] = useState(true);

  //show HeplSupport
  const [click, setClick] = useState(true);

  //show setup and privacy
  const [setup, setSetup] = useState(true);

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
      {/* showmore showless */}
      <View>
        {show ? null : <ShowMore />}
        <TouchableOpacity
          style={styles.tobShowmore}
          onPress={() => setShow(!show)}>
          {show ? (
            <Text style={styles.txtShowHide}>Xem thêm</Text>
          ) : (
            <Text style={styles.txtShowHide}>Ẩn bớt</Text>
          )}
        </TouchableOpacity>
      </View>
      {/** line */}
      <View
        style={{
          width,
          height: 1,
          backgroundColor: '#C9ccd1',
          marginTop: 15,
        }}
      />
      {/* RSCommunity */}
      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}
          onPress={() => setIsShow(!isShow)}>
          <Ionic name="heart" size={32} color="#889ba9" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
            }}>
            Nguồn lực cộng đồng
          </Text>
          <View style={{position: 'absolute', right: 10}}>
            {isShow ? (
              <Ionic name="chevron-down" size={22} color="#606163" />
            ) : (
              <Ionic name="chevron-up" size={22} color="#606163" />
            )}
          </View>
        </TouchableOpacity>
        {isShow ? null : <RSCommunity />}
      </View>

      {/** line */}
      <View
        style={{
          width,
          height: 1,
          backgroundColor: '#C9ccd1',
        }}
      />

      {/* help and support */}
      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}
          onPress={() => setClick(!click)}>
          <Ionic name="help-circle" size={38} color="#b5c9d2" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
            }}>
            Trợ giúp & hỗ trợ
          </Text>
          <View style={{position: 'absolute', right: 10}}>
            {click ? (
              <Ionic name="chevron-down" size={22} color="#606163" />
            ) : (
              <Ionic name="chevron-up" size={22} color="#606163" />
            )}
          </View>
        </TouchableOpacity>
        {click ? null : <HelpSuppot />}
      </View>

      {/** line */}
      <View
        style={{
          width,
          height: 1,
          backgroundColor: '#C9ccd1',
        }}
      />

      {/* settings and privacy */}
      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}
          onPress={() => setSetup(!setup)}>
          <Ionic name="settings" size={38} color="#a1b4bb" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
            }}>
            Cài đặt & quyền riêng tư
          </Text>
          <View style={{position: 'absolute', right: 10}}>
            {setup ? (
              <Ionic name="chevron-down" size={22} color="#606163" />
            ) : (
              <Ionic name="chevron-up" size={22} color="#606163" />
            )}
          </View>
        </TouchableOpacity>
        {setup ? null : <SetupPrivacy />}
      </View>
      {/* log out */}
      <TouchableOpacity
        style={[styles.tobShowmore, {marginBottom: 15}]}
        onPress={() =>
          Alert.alert('Đăng xuất', 'Bạn có muốn đăng xuất?', [
            {
              text: 'Có',
            },
          ])
        }>
        <Text style={styles.txtShowHide}>Đăng xuất</Text>
      </TouchableOpacity>

      {/* bottomsheet */}
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
                      selected === i
                        ? 'radio-button-on-outline'
                        : 'radio-button-off-outline'
                    }
                    color={selected === i ? 'blue' : '#C9ccd1'}
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
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={[
              styles.imgAvt,
              {
                backgroundColor: '#C9ccd1',
                borderWidth: 1,
                borderColor: '#999993',
              },
            ]}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 15,
              color: 'black',
            }}>
            Đăng nhập bằng tài khoản khác
          </Text>
        </TouchableOpacity>
      </RBSheet>
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: '#f1f2f4',
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
  tobShowmore: {
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e6e7ec',
    marginTop: 20,
    marginHorizontal: '4%',
    borderRadius: 8,
  },
  txtShowHide: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
