import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const data1 = [
  {
    id: 1,
    uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
    avatarUri:
      'https://mylivewallpapers.b-cdn.net/wp-content/uploads/Games/thumb-Pulsefire-Caitlyn-LoL.jpg',
    txtFooter: 'Yasuo Best',
    selected: false,
  },
  {
    id: 2,
    uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
    avatarUri:
      'https://mylivewallpapers.b-cdn.net/wp-content/uploads/Games/thumb-Pulsefire-Caitlyn-LoL.jpg',
    txtFooter: 'Miss Fortune',
    selected: false,
  },
  {
    id: 3,
    uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
    avatarUri:
      'https://mylivewallpapers.b-cdn.net/wp-content/uploads/Games/thumb-Pulsefire-Caitlyn-LoL.jpg',
    txtFooter: 'Yone',
    selected: false,
  },
  {
    id: 4,
    uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
    avatarUri:
      'https://mylivewallpapers.b-cdn.net/wp-content/uploads/Games/thumb-Pulsefire-Caitlyn-LoL.jpg',
    txtFooter: 'Garen',
    selected: false,
  },
  {
    id: 5,
    uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2021/10/caitlyn-sa%CC%86n-ba%CC%86%CC%81n.jpeg',
    avatarUri:
      'https://mylivewallpapers.b-cdn.net/wp-content/uploads/Games/thumb-Pulsefire-Caitlyn-LoL.jpg',
    txtFooter: 'Caitlyn',
    selected: false,
  },
];
const data2 = [
  {
    id: 1,
    uri: 'https://cdn.tgdd.vn//GameApp/-1//arctic-warfare-caitlyn-800x450.jpg',
    avatarUri:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg',
    txtFooter: 'Twisted Fate',
    selected: false,
  },
  {
    id: 2,
    uri: 'https://cdn.tgdd.vn//GameApp/-1//arctic-warfare-caitlyn-800x450.jpg',
    avatarUri:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg',
    txtFooter: 'Graves',
    selected: false,
  },
  {
    id: 3,
    uri: 'https://cdn.tgdd.vn//GameApp/-1//arctic-warfare-caitlyn-800x450.jpg',
    avatarUri:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg',
    txtFooter: 'Captain Teemo',
    selected: false,
  },
  {
    id: 4,
    uri: 'https://cdn.tgdd.vn//GameApp/-1//arctic-warfare-caitlyn-800x450.jpg',
    avatarUri:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg',
    txtFooter: 'Pantheon',
    selected: false,
  },
  {
    id: 5,
    uri: 'https://cdn.tgdd.vn//GameApp/-1//arctic-warfare-caitlyn-800x450.jpg',
    avatarUri:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg',
    txtFooter: 'Lucian',
    selected: false,
  },
];
const data3 = [
  {
    id: 1,
    uri: 'http://lol-stats.net/uploads/sEFEU9KXCpFAYRxATxJN72cH9IZPg2Flqgv5UpcO.jpeg',
    avatarUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuleai7q9RCEm7Ma4ivagHU2bH5yNyedt5xw&usqp=CAU',
    txtFooter: 'Ashe',
    selected: false,
  },
  {
    id: 2,
    uri: 'http://lol-stats.net/uploads/sEFEU9KXCpFAYRxATxJN72cH9IZPg2Flqgv5UpcO.jpeg',
    avatarUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuleai7q9RCEm7Ma4ivagHU2bH5yNyedt5xw&usqp=CAU',
    txtFooter: 'Thresh',
    selected: false,
  },
  {
    id: 3,
    uri: 'http://lol-stats.net/uploads/sEFEU9KXCpFAYRxATxJN72cH9IZPg2Flqgv5UpcO.jpeg',
    avatarUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuleai7q9RCEm7Ma4ivagHU2bH5yNyedt5xw&usqp=CAU',
    txtFooter: 'Morgana',
    selected: false,
  },
  {
    id: 4,
    uri: 'http://lol-stats.net/uploads/sEFEU9KXCpFAYRxATxJN72cH9IZPg2Flqgv5UpcO.jpeg',
    avatarUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuleai7q9RCEm7Ma4ivagHU2bH5yNyedt5xw&usqp=CAU',
    txtFooter: 'Kayle',
    selected: false,
  },
  {
    id: 5,
    uri: 'http://lol-stats.net/uploads/sEFEU9KXCpFAYRxATxJN72cH9IZPg2Flqgv5UpcO.jpeg',
    avatarUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuleai7q9RCEm7Ma4ivagHU2bH5yNyedt5xw&usqp=CAU',
    txtFooter: 'Aurelion Sol',
    selected: false,
  },
];

const Story = props => {
  const [data, setData] = useState([]);

  const [select, setSelect] = useState([data1, data2, data3]);

  //multi pick 
  const handleOnpress = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };

  // render luôn view sau khi nhảy vào 1 màn khác
  useEffect(() => {
    switch (props.title) {
      case 'Tin':
        setData(data1);
        setSelect(data1);
        break;
      case 'Reels':
        setData(data2);
        setSelect(data2);
        break;
      case 'Phòng họp...':
        setData(data3);
        setSelect(data3);
        break;
      default:
        break;
    }
  }, [props.title]);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: 108,
          marginTop: 10,
          marginRight: 8,
        }}>
        <Image style={styles.img} source={{uri: item.uri}} />
        <TouchableOpacity
          style={[
            styles.avtStory,
            {borderColor: item.selected ? '#c9ccd1' : '#1878f3'},
          ]}
          activeOpacity={1}
          onPress={() => handleOnpress(item)}>
          <Image
            source={{uri: item.avatarUri}}
            style={[
              {width: 38, height: 38, resizeMode: 'cover', borderRadius: 25},
            ]}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#ffffff',
            position: 'absolute',
            bottom: 0,
            left: 3,
            textAlign: 'left',
            padding: 10,
          }}>
          {item.txtFooter}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.listStory}
      renderItem={item => renderItem(item)}
      keyExtractor={item => item.id}
      data={(data, select)}
      horizontal
      // extraData={select}
    />
  );
};

export default Story;

const styles = StyleSheet.create({
  listStory: {
    width,
    height: 190,
    marginLeft: 10,
  },
  img: {
    width: 108,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  avtStory: {
    width: 48,
    height: 48,
    borderRadius: 30,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 6,
    left: 6,
  },
});
