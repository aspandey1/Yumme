import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  NativeModules,
} from "react-native";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.loginSubText}>Please sign in to continue</Text>
      {/* Text Inputs */}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          //value={}
          //onChangeText={text => }
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Password"
          //value={}
          //onChangeText={text => }
          secureTextEntry
          style={styles.input}
        ></TextInput>
      </View>

      {/* Buttons */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const { StatusBarManager } = NativeModules; // Used to get StatusBar Height on Andriod

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? StatusBarManager.HEIGHT - 10 : 0, // Only Andriod
  },
  loginText: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "baseline",
    paddingLeft: "10%",
    paddingBottom: 8,
  },
  loginSubText: {
    fontSize: 16,
    alignSelf: "baseline",
    paddingLeft: "10%",
    color: "grey",
    paddingBottom: 80,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "dodgerblue",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "#D3D3D3",
    marginTop: 5,
  },
  buttonOutlineText: {
    color: "dodgerblue",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default LoginScreen;
