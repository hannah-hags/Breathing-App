import React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';

const image = {uri: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701316882.jpg'};

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Select Exercise</Text>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Breathing1")}
        >
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'navy'}}>4-7-8 Breathing</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate("Breathing2")}
        >
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'navy'}}>Box Breathing</Text>
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
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'floralwhite',
    height: 75,
    width: 300,
    fontSize: 30,
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'floralwhite',
    height: 75,
    width: 300,
    fontSize: 30,
    marginTop: 50,
    marginBottom:75,
    justifyContent: 'center',
    alignSelf: 'center',
  },

});

export default StartScreen;


//  SOURCES
//  https://www.verywellmind.com/abdominal-breathing-2584115