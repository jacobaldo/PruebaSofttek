import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {HeaderProps} from './types';

const Header = ({textEnd}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/LogoRed.png')}
        style={styles.imageHeader}
        resizeMode="contain"
      />
      <View style={styles.headerEnd}>
        <Image
          source={require('../../assets/Vector.png')}
          style={styles.cell}
          resizeMode="contain"
        />
        <Text style={styles.textCell}>{textEnd}</Text>
      </View>
    </View>
  );
};

export default Header;
