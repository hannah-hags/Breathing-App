import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import StartScreen from './StartScreen';
import breathingExercise1 from './breathingExercise1';
import SelectionScreen from '/SelectionScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
        />
        <Stack.Screen
          name="Selection"
          component={SelectionScreen}
        />
        <Stack.Screen 
          name="breathing1" 
          component={breathingExercise1} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//  SOURCES:
//  https://www.makeuseof.com/react-native-navigate-between-screens/