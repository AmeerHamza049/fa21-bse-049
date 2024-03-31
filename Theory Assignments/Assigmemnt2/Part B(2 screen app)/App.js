import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ title: 'Car Purchase App' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
