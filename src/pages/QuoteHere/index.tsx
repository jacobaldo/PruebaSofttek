import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styles} from './styles';
import {useQuoteHere} from './hooks';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants/colors';
import Checkbox from '../../components/Checkbox';
import {Button} from '../../components/Button';
import Header from '../../components/Header';

const QuoteHere = ({navigation}: any) => {
  const {
    phone,
    activeProvacy,
    setActiveProvacy,
    activeComunications,
    setComunications,
    formik,
  } = useQuoteHere({
    navigation,
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/blurAsset1.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      />
      <SafeAreaView style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerBody}>
            <Image
              source={require('../../assets/blurAsset2.png')}
              style={styles.imageBackgroundBottom}
              resizeMode="cover"
            />

            <Header textEnd={phone} />

            <View style={styles.cardHeader}>
              <View style={styles.containerCard}>
                <LinearGradient
                  colors={[colors.secondary, colors.tertiary]}
                  style={styles.gradient}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}>
                  <Text style={styles.textGradrient}>
                    Seguro Salud Flexible
                  </Text>
                </LinearGradient>
                <Text style={styles.textGradrientTitle}>
                  Creado para ti y tu familia
                </Text>
              </View>
              <Image
                source={require('../../assets/imageHome.png')}
                style={styles.imageHome}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.textDescription}>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría, 100% online.
            </Text>
            <View>
              <View style={styles.containerInput}>
                <View style={styles.dropDronw}>
                  <Text style={styles.dropDronwText}>DNI</Text>
                  <Image
                    source={require('../../assets/iconDown.png')}
                    style={styles.iconDown}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.input}>
                  <Text
                    style={{
                      ...styles.labelInput,
                      color: formik.errors.numberDNI
                        ? colors.btnSecondary
                        : colors.label,
                    }}>
                    Nro. de documento
                  </Text>
                  <TextInput
                    style={styles.inputText}
                    value={formik.values.numberDNI}
                    onChangeText={formik.handleChange('numberDNI')}
                  />
                </View>
              </View>
              <View style={styles.containerInput}>
                <View style={styles.input}>
                  <Text
                    style={{
                      ...styles.labelInput,
                      color: formik.errors.numberPhone
                        ? colors.btnSecondary
                        : colors.label,
                    }}>
                    Celular
                  </Text>
                  <TextInput
                    style={styles.inputText}
                    value={formik.values.numberPhone}
                    onChangeText={formik.handleChange('numberPhone')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.containerCheck}>
              <Checkbox active={activeProvacy} onActive={setActiveProvacy} />
              <Text style={styles.descCheck}>
                Acepto la Política de Privacidad
              </Text>
            </View>
            <View style={styles.containerCheck}>
              <Checkbox
                active={activeComunications}
                onActive={setComunications}
              />
              <Text style={styles.descCheck}>
                Acepto la Política Comunicaciones Comerciales
              </Text>
            </View>
            <Text style={styles.link}>Aplican Términos y Condiciones.</Text>
            <Button
              onPress={formik.handleSubmit}
              type="primary"
              btnText="Cotiza aquí"
              disabled={
                !formik.isValid || !activeProvacy || !activeComunications
              }
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.containerImage}>
              <Image
                source={require('../../assets/Logo.png')}
                style={styles.imageFooter}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.footerText}>
              © 2023 RIMAC Seguros y Reaseguros.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default QuoteHere;
