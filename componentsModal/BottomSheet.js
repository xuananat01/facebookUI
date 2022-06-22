import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const BottomSheet = () => {

  const sheetRef = useRef<BottomSheet>(null)
  const [isOpen, setIsOpen] = useState(true)

  const snapPoints = ['40%']

  return (
    <View style={styles.container}>
      <Text>BottomSheet</Text>
      
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 }
});
