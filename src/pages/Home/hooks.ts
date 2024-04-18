import {useEffect, useState} from 'react';
import {useAxiosGet} from '../../services/axiosConfig';
import {HomeProps, Plan, Plans, User} from './types';
import {Insurance} from '../../components/InsuranceCards/types';
import moment from 'moment';
import {myAge} from '../../utils/myAge';

export const useHome = ({navigation, phone}: HomeProps) => {
  const [selectInsurance, setSelectInsurance] = useState<Insurance>();
  const [myage, setMyAge] = useState<number>(0);
  const {data: user, getData, loading} = useAxiosGet<User>('/user.json');
  const {
    data: plans,
    getData: getPlans,
    loading: loadingPlans,
  } = useAxiosGet<Plans>('/plans.json');
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (user) {
      let age = myAge(moment(user.birthDay, 'DD-MM-YYYY'));
      setMyAge(age);
    }
    if (user && selectInsurance && myage) {
      getPlans();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectInsurance, user]);
  useEffect(() => {
    if (plans && plans.list.length > 2) {
      plans.list[2].recommended = true;
    }
  }, [plans]);

  const onPressItem = (item: Plan) => {
    navigation.navigate('InsuranceSummary', {
      navigation,
      phone,
      item,
      user,
    });
  };

  return {
    plans,
    loadingPlans,
    user,
    loading,
    onPressItem,
    selectInsurance,
    setSelectInsurance,
    myage,
  };
};
