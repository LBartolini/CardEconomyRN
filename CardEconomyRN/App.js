import React from 'react';
import Home from './Home';
import NewTransaction from './NewTransaction';
import TransactionHistory from './History';
import { DrawerMenu } from './DrawerMenu.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        headerMode={'none'}
        drawerPosition={'right'}
        drawerType={'front'}
        drawerContent={ props => <DrawerMenu {...props}/> }
      >
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="history" component={TransactionHistory} />
        <Drawer.Screen name="new-transaction" component={NewTransaction} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
