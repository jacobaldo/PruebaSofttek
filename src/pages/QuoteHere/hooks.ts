import {useState} from 'react';
import {QuoteHereProps, Search} from './types';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../redux/Register/RegisterAcction';

export const useQuoteHere = ({navigation}: QuoteHereProps) => {
  const phone = '(01) 411 6001';
  const dispatch = useDispatch();
  const [activeProvacy, setActiveProvacy] = useState(false);
  const [activeComunications, setComunications] = useState(false);
  const RegistrationSchema = Yup.object().shape({
    numberDNI: Yup.string()
      .required('Nro. de documento')
      .min(8, 'El número de documento debe tener al menos 8 caracteres'),
    numberPhone: Yup.string()
      .required('Celular')
      .min(9, 'El número de celular debe tener al menos 9 caracteres'),
  });
  const formik = useFormik({
    initialValues: {
      numberDNI: '',
      numberPhone: '',
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values: Search) => {
      dispatch(setUserData(values));
      onPressQuoteHere();
    },
  });
  const onPressQuoteHere = () => {
    navigation.navigate('Home', {navigation, phone});
  };
  return {
    phone,
    activeProvacy,
    setActiveProvacy,
    activeComunications,
    setComunications,
    formik,
  };
};
