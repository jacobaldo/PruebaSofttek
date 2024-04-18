import React from 'react';
import {Image} from 'react-native';
import {Insurance} from '../components/InsuranceCards/types';

export const listInsurance: Insurance[] = [
  {
    id: 1,
    icon: (
      <Image
        source={require('../assets/IcProtectionLight.png')}
        style={{width: 32, height: 32}}
        resizeMode="contain"
      />
    ),
    title: 'Para mí',
    description:
      'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
  },
  {
    id: 2,
    icon: (
      <Image
        source={require('../assets/IcAddUserLight.png')}
        style={{width: 32, height: 32}}
        resizeMode="contain"
      />
    ),
    title: 'Para alguien más',
    description:
      'Realiza una cotización para uno de tus familiares o cualquier persona.',
  },
];
