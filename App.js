import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import StartScreen from './StartScreen';
import BreathingExercise1 from './BreathingExercise1';
import BreathingExercise2 from './BreathingExercise2';
import SelectionScreen from './SelectionScreen';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import ConfirmationPage from './ConfirmationPage';

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
          name="SignIn"
          component={SignInPage}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
        />
        <Stack.Screen
          name="Confirmation"
          component={ConfirmationPage}
        />
        <Stack.Screen
          name="Selection"
          component={SelectionScreen}
        />
        <Stack.Screen 
          name="Breathing1" 
          component={BreathingExercise1} 
        />
        <Stack.Screen 
          name="Breathing2" 
          component={BreathingExercise2} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//  SOURCES:
//  https://www.makeuseof.com/react-native-navigate-between-screens/
//  entry point in app.json was found online 