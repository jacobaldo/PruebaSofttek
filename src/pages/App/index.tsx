import React from 'react';
import {MyAppPros} from './types';
import {NavigationContainer} from '@react-navigation/native';

import QuoteHere from '../QuoteHere';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import InsuranceSummary from '../InsuranceSummary';

const Stack = createStackNavigator<MyAppPros>();

const AuthRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'QuoteHere'}
        screenOptions={{
          headerTitleAlign: 'center',

          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="QuoteHere"
          component={QuoteHere}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InsuranceSummary"
          component={InsuranceSummary}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRouter;
