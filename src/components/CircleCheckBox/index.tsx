import React from 'react';
import {Image, Pressable} from 'react-native';
import {styles} from './styles';
import {CircleCheckboxProps} from './types';

const CircleCheckbox = ({active, onActive}: CircleCheckboxProps) => {
  return (
    <Pressable onPress={() => onActive(!active)}>
      {active ? (
        <Image
          source={require('../../assets/radioButtonActive.png')}
          style={styles.imageBackground}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require('../../assets/radioButtonInactive.png')}
          style={styles.imageBackground}
          resizeMode="cover"
        />
      )}
    </Pressable>
  );
};

export default CircleCheckbox;
