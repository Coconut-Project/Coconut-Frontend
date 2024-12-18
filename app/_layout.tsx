import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from ".";
import Terms from "./Terms";
import Register from "./Register";
import ScanTuto from "./ScanTuto";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={Home} options={{headerTitle: "Accueil"}}/>
        <Stack.Screen name="Terms" component={Terms} options={{headerTitle: "CDU"}} />
        <Stack.Screen name="Register" component={Register} options={{headerTitle: "S'inscrire"}}/>
        <Stack.Screen name="ScanTuto" component={ScanTuto} options={{headerTitle: "Comment ça marche ?"}}/>
      </Stack.Navigator>
  );
}
