import * as React from 'react';
import { Animated, View, Button, Text } from 'react-native';


export default function BreathingExercise1() {
  const box1AnimationValue = React.useRef(new Animated.Value(0)).current;
  const box2AnimationValue = React.useRef(new Animated.Value(0)).current;
  const box3AnimationValue = React.useRef(new Animated.Value(0)).current;

  const buttonPressed = () => {
    Animated.loop(
      Animated.stagger(0, [
        Animated.timing(box1AnimationValue, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(box2AnimationValue, {
          toValue: 1,
          delay: 4000,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(box3AnimationValue, {
          toValue: 1,
          delay: 11000,
          duration: 8000,
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
        height: 100,
        width: 100,
        borderRadius: 100/2,
        marginTop: 70,
        marginBottom: 20,
        backgroundColor: 'powderblue',
        transform: [
          {
            translateX: box1AnimationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 290],
            }),
          }
        ],
      }}>
        <Text style={{textAlign: 'center', marginTop: 30, fontSize:25, color:'white', marginTop:20}}>Breath   In</Text>
      </Animated.View>
      
      <Animated.View style={{
        height: 100,
        width: 100,
        borderRadius: 100/2,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'lightsalmon',
        transform: [
          {
            translateX: box2AnimationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 290],
            }),
          }
        ],
        }}>
        <Text style={{textAlign: 'center', fontSize:25, color: 'white', marginTop:33}}>Hold</Text>
      </Animated.View>
      
      <Animated.View style={{
        height: 100,
        width: 100,
        borderRadius: 100/2,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'moccasin',
        transform: [
          {
            translateX: box3AnimationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 290],
            }),
          }
        ],
      }}>
        <Text style={{textAlign: 'center', marginTop: 30, fontSize:25, color:'white', marginTop:20}}>Breath Out</Text>
      </Animated.View>
      <Button title={'Begin Breathing Exercise'} onPress={buttonPressed} />
      <Text style={{textAlign: 'center', fontSize:20}}>Press the button to be led through a 4-7-8 breathing exercise</Text>
    </View>
  );
}


//  SOURCES:
//  https://www.makeuseof.com/react-native-navigate-between-screens/ --> styling text