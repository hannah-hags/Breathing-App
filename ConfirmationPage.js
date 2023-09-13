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

//taken directly from AWS website and edited
async function confirmSignUp(username, code) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

export default function ConfirmationPage({navigation}) {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Create Account</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Input Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Input Confirmation Code"
          placeholderTextColor="#003f5c"
          onChangeText={(code) => setCode(code)}
        /> 
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => [confirmSignUp(username, code), navigation.navigate("SignIn")]}
        >
        <Text>Confirm Account</Text>
      </TouchableOpacity> 
      <Text style={styles.subtitle}>You will be redirected back to the Sign In page</Text>
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
    marginLeft: 20,
  },
  button: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 95,
    backgroundColor: "lightblue",
  },
  subtitle: {
    color: 'floralwhite',
    fontSize: 15,
    textAlign: 'center',
    marginTop:15,
    marginBottom: 20,
  },
});

//  SOURCES
//  https://docs.amplify.aws/start/getting-started/auth/q/integration/react-native/
//  https://docs.amplify.aws/lib/auth/emailpassword/q/platform/react-native/#add-the-sign-up-sign-in-and-sign-out-capabilities
//  https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t --> code for login screen layout