import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import SignUpScreen from "./app/screens/SignUpScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Create Account"
          component={SignUpScreen}
          options={{
            headerShown: false,
            headerTitleStyle: {
              fontSize: 30,
            },
          }}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
