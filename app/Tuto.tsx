import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/NavigationType";
import Home from "./Home";
import Terms from "./Terms";
import Register from "./Register";
import ScanTuto from "./ScanTuto";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ScanTuto" component={ScanTuto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
