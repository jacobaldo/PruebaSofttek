import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppPros} from '../App/types';
import {Plan, User} from '../Home/types';

export interface InsuranceSummaryProps {
  navigation: StackNavigationProp<MyAppPros>;
  body?: string;
  phone: string;
  item: Plan;
  user: User | null;
}
