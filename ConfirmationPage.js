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
} from "react-native";
import { Auth } from 'aws-amplify';

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
        <Text>Confirm Account and Return to Sign In</Text>
      </TouchableOpacity>  
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "lightblue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "lightblue",
  },
});

//  SOURCES
//  https://docs.amplify.aws/start/getting-started/auth/q/integration/react-native/
//  https://docs.amplify.aws/lib/auth/emailpassword/q/platform/react-native/#add-the-sign-up-sign-in-and-sign-out-capabilities
//  https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t --> code for login screen layout