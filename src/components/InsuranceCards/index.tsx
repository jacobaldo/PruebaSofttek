import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {InsuranceCardsProps} from './types';
import CircleCheckbox from '../CircleCheckBox';

const InsuranceCards = ({data, active, onPressActive}: InsuranceCardsProps) => {
  return (
    <View style={[styles.InsuranceCards, active && styles.active]}>
      <View style={styles.check}>
        <CircleCheckbox active={active} onActive={() => onPressActive(data)} />
      </View>

      <View style={styles.header}>
        <View style={styles.icon}>{data.icon}</View>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
};

export default InsuranceCards;
