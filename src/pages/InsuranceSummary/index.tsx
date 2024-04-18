import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {MyAppPros} from '../App/types';
import {StackScreenProps} from '@react-navigation/stack';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
interface Props extends StackScreenProps<MyAppPros, 'InsuranceSummary'> {}
const InsuranceSummary = ({route}: Props) => {
  const {item, phone, user} = route.params;
  const {numberDNI, numberPhone} = useSelector(
    (state: any) => state?.registerReducer.userData,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header textEnd={phone} />
        <Text style={styles.title}>Resumen del seguro</Text>
        <View style={styles.InsuranceCard}>
          <Text style={styles.titleDescription}>Precios calculados para:</Text>
          <View style={styles.nameContainer}>
            <Image
              source={require('../../assets/iconPersons.png')}
              style={styles.imagePersons}
              resizeMode="cover"
            />
            <Text style={styles.name}>{`${user?.name} ${user?.lastName}`}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.textTitle}>Responsable de pago</Text>
            <Text style={styles.textDesc}>{`DNI: ${numberDNI}`}</Text>
            <Text style={styles.textDesc}>{`Celular: ${numberPhone}`}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.textTitle}>Plan elegido</Text>
            <Text style={styles.textDesc}>{item.name}</Text>
            <Text
              style={
                styles.textDesc
              }>{`Costo del Plan: $${item.price} al mes`}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InsuranceSummary;
