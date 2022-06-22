import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    id: 1,
    uriAvt: 'https://media.vietravel.com/images/NewsPicture/Thuy-Si.1.jpg',
  },
  {
    id: 2,
    uriAvt:
      'https://visana.vn/wp-content/uploads/2019/06/Du-lich-Thuy-Sy-8.jpg',
  },
  {
    id: 3,
    uriAvt: 'https://maifootsteps.com/wp-content/uploads/2020/01/blausee-1.jpg',
  },
  {
    id: 4,
    uriAvt:
      'http://vyctravel.com/libs/upload/ckfinder/images/Th%E1%BB%A5y%20S%C4%A9/67391650_2822757787751817_6692467419866202112_o.jpg',
  },
  {
    id: 5,
    uriAvt:
      'https://songhantourist.com/manipulate/780x410/tours-galleries/1-1550721197-thuy-sy-co-kinh-net-thu.jpeg',
  },
  {
    id: 6,
    uriAvt: 'https://gonatour.vn/vnt_upload/news/04_2020/Geneva_Thuy_Sy_1.jpg',
  },
  {
    id: 7,
    uriAvt:
      'https://travelpx.net/wp-content/uploads/2020/09/Thuy-Si-by-Travelpx.jpg',
  },
  {
    id: 8,
    uriAvt:
      'https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w1024/Uploaded/tmuitg/2020_02_22/original.jpg',
  },
  {
    id: 9,
    uriAvt:
      'https://visana.vn/wp-content/uploads/2019/06/xin-visa-thuy-si-tu-tuc-1.jpg',
  },
  {
    id: 10,
    uriAvt:
      'https://ximgo.com/upload/2020/05/27/100669780_901648183595450_153681263764416921_n.jpg',
  },
];

const FlAvtForyou = () => {
  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        >
        <Image
          style={styles.imgAvt}
          source={{uri: item.item.uriAvt}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem(item)}
      scrollEnabled={false}
      horizontal
    />
  );
};

export default FlAvtForyou;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  imgAvt: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  imgAvtTouch: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
});
