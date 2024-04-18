import React from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {useHome} from './hooks';
import {MyAppPros} from '../App/types';
import {StackScreenProps} from '@react-navigation/stack';
import {colors} from '../../constants/colors';
import {ProgressBar} from 'react-native-paper';
import Header from '../../components/Header';
import InsuranceCards from '../../components/InsuranceCards';
import {listInsurance} from '../../mooks/listInsurance';
import {Insurance} from '../../components/InsuranceCards/types';
import {Plan} from './types';
import PlanCard from '../../components/PlanCard';
interface Props extends StackScreenProps<MyAppPros, 'Home'> {}
const Home = ({navigation, route}: Props) => {
  const {phone} = route.params;
  const {
    plans,
    loadingPlans,
    user,
    loading,
    onPressItem,
    selectInsurance,
    setSelectInsurance,
    myage,
  } = useHome({
    navigation,
    phone,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.progressContainter}>
          <Header textEnd={phone} />

          <View style={styles.subHeader}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/buttomBack.png')}
                style={styles.buttomBack}
                resizeMode="cover"
              />
            </Pressable>

            <Text style={styles.textStep}>Paso 1 de 2</Text>
            <View style={styles.progressCont}>
              <ProgressBar
                style={styles.progress}
                progress={0.1}
                color={colors.progressColor}
              />
            </View>
          </View>
        </View>
        {loading ? (
          <ActivityIndicator size={30} color={colors.primary} />
        ) : (
          <View style={styles.body}>
            <Text
              style={
                styles.welcome
              }>{`${user?.name} ¿Para quién deseas cotizar?`}</Text>
            <Text style={styles.welcomeDesc}>
              Selecciona la opción que se ajuste más a tus necesidades.
            </Text>
            {listInsurance.map((item: Insurance, index: number) => (
              <InsuranceCards
                key={index}
                data={item}
                active={selectInsurance === item ?? false}
                onPressActive={setSelectInsurance}
              />
            ))}
          </View>
        )}

        {loadingPlans ? (
          <ActivityIndicator size={30} color={colors.primary} />
        ) : (
          <View style={styles.scroll}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {plans &&
                plans?.list
                  .filter((item: Plan) => item.age > myage)
                  .map((item: Plan, index: number) => {
                    const esRecomendado = index === 1 ? true : false;
                    const precioConDescuento =
                      selectInsurance?.id === 2
                        ? item.price * 0.95
                        : item.price;
                    return (
                      <PlanCard
                        key={index}
                        data={{
                          ...item,
                          price: precioConDescuento,
                          recommended: esRecomendado,
                        }}
                        onPress={onPressItem}
                      />
                    );
                  })}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
