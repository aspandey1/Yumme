import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  NativeModules,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  headerHeight,
} from "react-native";

function SignUpScreen(props) {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.createAccountText}>Create Account</Text>
      {/* Text Inputs */}

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          placeholder="e.g. johndoe@gmail.com"
          keyboardType="email-address"
          //value={}
          //onChangeText={text => }
          style={styles.input}
        ></TextInput>
        <Text>First Name</Text>
        <TextInput
          placeholder="e.g. John"
          //value={}
          //onChangeText={text => }
          style={styles.input}
        ></TextInput>
        <Text>Last Name</Text>
        <TextInput
          placeholder="e.g. Doe"
          //value={}
          //onChangeText={text => }
          style={styles.input}
        ></TextInput>
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          //value={}
          //onChangeText={text => }
          secureTextEntry
          style={styles.input}
        ></TextInput>
        <Text>Re-Enter Password</Text>
        <TextInput
          placeholder="Re-Enter Password"
          //value={}
          //onChangeText={text => }
          secureTextEntry
          style={styles.input}
        ></TextInput>
      </View>

      {/* Buttons */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const { StatusBarManager } = NativeModules; // Used to get StatusBar Height on Andriod

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createAccountText: {
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "baseline",
    paddingLeft: "10%",
    paddingBottom: 30,
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
    marginBottom: 10,
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
  promptNames: {
    paddingTop: 10,
  },
});

export default SignUpScreen;
