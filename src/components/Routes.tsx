import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigation, Routes} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/Home';
import {Films} from '../screens/Films';
import {Detail} from '../screens/Detail';

const Stack = createNativeStackNavigator<RootStackNavigation>();

export const RootNavigation = (props: any) => {
  return (
    <NavigationContainer {...props}>
      <Stack.Navigator initialRouteName={Routes.HOME}>
        <Stack.Screen
          name={Routes.HOME}
          component={Home}
          options={navigationOptions}
        />
        {publicRoutes}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const navigationOptions = {headerShown: false};

const publicRoutes = [
  <Stack.Screen
    key={Routes.FILMS}
    name={Routes.FILMS}
    options={navigationOptions}
    component={Films}
  />,
  <Stack.Screen
    key={Routes.DETAIL}
    name={Routes.DETAIL}
    component={Detail}
    options={navigationOptions}
  />,
];
