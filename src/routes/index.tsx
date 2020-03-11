import * as React from 'react';
import Film from '../containers/film';

export enum ROUTES_NAMES {
  Home = 'Home',
  Film = 'Film',
}

import Home from '../containers/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES_NAMES.Home}>
        <Stack.Screen
          options={{
            headerTitle: 'Star Wars',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{
            headerTitle: 'Detail of Movie',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
          name={ROUTES_NAMES.Film}
          component={Film}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
