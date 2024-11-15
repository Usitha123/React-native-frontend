import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={LoginForm} 
        options={{ headerShown: false }} // Hide the header for the LoginForm
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterForm} 
        options={{ headerShown: false }} // Hide the header for the RegisterForm
      />
      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ headerShown: false }} // Hide the header for the RegisterForm
      />
    </Stack.Navigator>
  );
}
