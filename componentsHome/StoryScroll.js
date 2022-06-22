// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   FlatList,
//   Image,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');

// const StoryScroll = () => {
//   const data = [
//     {
//       id: 1,
//       uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
//       avatarUri:
//         'https://ecdn.game4v.com/g4v-content/uploads/2021/11/21131923/Sheriff-1-1637475563-2.jpg',
//       txtFooter: 'Xuân An',
//     },
//     {
//       id: 2,
//       uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
//       avatarUri:
//         'https://ecdn.game4v.com/g4v-content/uploads/2021/11/21131923/Sheriff-1-1637475563-2.jpg',
//       txtFooter: 'Nguyễn Linh',
//     },
//     {
//       id: 3,
//       uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
//       avatarUri:
//         'https://ecdn.game4v.com/g4v-content/uploads/2021/11/21131923/Sheriff-1-1637475563-2.jpg',
//       txtFooter: 'Bùi Xuân Duy',
//     },
//     {
//       id: 4,
//       uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
//       avatarUri:
//         'https://ecdn.game4v.com/g4v-content/uploads/2021/11/21131923/Sheriff-1-1637475563-2.jpg',
//       txtFooter: 'Phương Thảo',
//     },
//   ];

//   const renderItem = item => {
//     return (
//       <View
//         style={{
//           width: 108,
//           marginTop: 10,
//           marginHorizontal: 2.5,
//         }}>
//         <Image style={styles.img} source={{uri: item.item.uri}} />
//         <View style={styles.avtStory}>
//           <Image
//             source={{uri: item.item.avatarUri}}
//             style={{
//               width: 45,
//               height: 45,
//               resizeMode: 'cover',
//               borderRadius: 25,
//             }}
//           />
//         </View>
//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: 'bold',
//             color: '#ffffff',
//             position: 'absolute',
//             bottom: 0,
//             left: 3,
//             textAlign: 'left',
//             padding: 10,
//           }}>
//           {item.item.txtFooter}
//         </Text>
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       style={styles.listStory}
//       horizontal
//       data={data}
//       renderItem={item => renderItem(item)}
//       keyExtractor={item => item.id}></FlatList>
//   );
// };

// export default StoryScroll;

// const styles = StyleSheet.create({
//   listStory: {
//     width,
//     height: 190,
//     marginLeft: 5,
//   },
//   img: {
//     width: 108,
//     height: '100%',
//     resizeMode: 'cover',
//     borderRadius: 12,
//     // borderWidth: 1,
//     // borderColor: '#caccd0',
//   },
//   // txtFooter: {
//   //   fontSize: 16,
//   //   fontWeight: 'bold',
//   //   color: '#ffffff',
//   //   padding: 10,
//   //   textAlign: 'center',
//   //   position: 'absolute',
//   //   bottom: -5,
//   // },
//   avtStory: {
//     width: 50,
//     height: 50,
//     borderRadius: 30,
//     position: 'absolute',
//     top: 8,
//     left: 10,
//   },
// });
