import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {PlanCardProps} from './types';
import {Button} from '../Button';

const PlanCard = ({data, onPress}: PlanCardProps) => {
  return (
    <View style={styles.InsuranceCards}>
      <View style={styles.recomended}>
        {data.recommended && (
          <View style={styles.contRecomended}>
            <Text style={styles.textRecomended}>Plan Recomendado</Text>
          </View>
        )}
      </View>
      <View style={styles.header}>
        <View style={styles.containerText}>
          <Text style={styles.textName}>{data.name}</Text>
          <Text style={styles.costo}>Costo del plan</Text>
          <Text style={styles.price}>{`$${data.price} al mes`}</Text>
        </View>
        <Image
          source={
            data.recommended
              ? require('../../assets/IcHospitalLight.png')
              : require('../../assets/IcHomeLight.png')
          }
          style={styles.imageHeader}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <ScrollView
          style={styles.scrollDescription}
          showsVerticalScrollIndicator={false}>
          {data.description.map((description, index) => (
            <View key={index} style={styles.rowDescription}>
              <View style={styles.point} />
              <Text style={styles.description}>{description}</Text>
            </View>
          ))}
        </ScrollView>

        <Button
          type="secondary"
          btnText="Seleccionar Plan"
          onPress={() => onPress(data)}
        />
      </View>
    </View>
  );
};

export default PlanCard;
