import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Auth } from 'aws-amplify';

const image = {uri: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701316882.jpg'};

async function signIn(username, password, {navigation}) {
  try {
    await Auth.signIn(username, password);
    navigation.navigate("Selection")
  } catch (error) {
    console.log('error signing in', error);
  }
}

export default function SignUpPage({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Sign In</Text>
      <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(username) => setUsername(username)}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          /> 
        </View> 
        <TouchableOpacity
          style={styles.button}
          onPress={() => signIn(username, password, {navigation})}
          >
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
          >
          <Text>Sign Up</Text>
        </TouchableOpacity>   
      </ImageBackground>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: 'floralwhite',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop:1,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginLeft: 60,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 5,
  },
  button: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    width: 75,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 170,
    backgroundColor: "lightblue",
  },
});

//  SOURCES
//  https://docs.amplify.aws/start/getting-started/auth/q/integration/react-native/
//  https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t --> code for login screen layout
