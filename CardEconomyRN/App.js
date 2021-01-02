import React from 'react';
import Home from './Home';
import NewTransaction from './NewTransaction';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'none'}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="new-transaction" component={NewTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
