import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppPros} from '../App/types';

export interface QuoteHereProps {
  navigation: StackNavigationProp<MyAppPros>;
}

export interface Search {
  numberDNI: string;
  numberPhone: string;
}
