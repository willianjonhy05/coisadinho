import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UsersScreen from './screens/UserScreen';
import UserDetailsScreen from './screens/UserDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserScreen" component={UsersScreen} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}