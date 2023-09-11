import React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';

const image = {uri: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701316882.jpg'};

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Welcome to the Breathing App</Text>
      <Text style={styles.subtitle}>Push the Button Below to Begin</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
        >
        <Text>Begin</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'floralwhite',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop:20,
  },
  subtitle: {
    color: 'floralwhite',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'floralwhite',
    height: 50,
    width: 200,
    fontSize: 30,
    marginTop: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },

});

export default StartScreen;


//  SOURCES
//  https://reactnative.dev/docs/style
//  https://reactnative.dev/docs/handling-touches
//  https://reactnative.dev/docs/colors
//  https://reactnative.dev/docs/button
//  https://reactnative.dev/docs/imagebackground
//  https://www.makeuseof.com/react-native-navigate-between-screens/