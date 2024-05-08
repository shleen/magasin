import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateGarments from './create_garments';
import Home from './home';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Create Garments'
          component={CreateGarments}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
