import * as React from 'react';
import { Animated, View, Button, Text } from 'react-native';


export default function BreathingExercise2() {
  const box1AnimationValue = React.useRef(new Animated.Value(0)).current;

  const buttonPressed = () => {
    Animated.loop(
      Animated.stagger(0, [
        Animated.timing(box1AnimationValue, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 4
      }
    ).start()
  }

  return (
    <View>
      <Animated.View style={{
        height: 300,
        width: 300,
        marginTop: 150,
        marginBottom: 20,
        backgroundColor: 'powderblue',
        marginLeft:50,
        transform: [
          {
            translateX: box1AnimationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 290],
            }),
          }
        ],
      }}>
        <Text style={{textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize:50, color:'white', marginTop:20}}>Breath              In</Text>
      </Animated.View>
      
      <Button title={'Begin Breathing Exercise'} onPress={buttonPressed} />
      <Text style={{textAlign: 'center', fontSize:20}}>Press the button to be led through a box breathing exercise</Text>
    </View>
  );
}


//  SOURCES:
//  https://www.makeuseof.com/react-native-navigate-between-screens/
//  https://feralcat.xyz/blog/2020/07/03/vertically-and-horizontally-center-text-in-react-native/ --> styling text