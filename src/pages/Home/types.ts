import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppPros} from '../App/types';

export interface HomeProps {
  navigation: StackNavigationProp<MyAppPros>;
  phone: string;
}

export interface User {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface Plans {
  list: Plan[];
}

export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
  recommended?: boolean;
}
