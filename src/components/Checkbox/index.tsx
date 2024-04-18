import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {styles} from './styles';
import {CheckboxProps} from './types';

const Checkbox = ({active, onActive}: CheckboxProps) => {
  return (
    <Pressable onPress={() => onActive(!active)}>
      {active ? (
        <Image
          source={require('../../assets/Checkbox.png')}
          style={styles.imageBackground}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.inactive} />
      )}
    </Pressable>
  );
};

export default Checkbox;
