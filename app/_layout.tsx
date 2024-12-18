import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomTabBar } from "@/components/Navbar";

type RootStackParamList = {
  Scan: { username: string }; // Requires a username parameter
  History: undefined;        // No parameters expected
  Profile: undefined;        // No parameters expected
};

type HistoryScreenProps = NativeStackScreenProps<RootStackParamList, 'History'>;
type ScanScreenProps = NativeStackScreenProps<RootStackParamList, 'Scan'>;
type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Stack = createBottomTabNavigator<RootStackParamList>();

function HistoryScreen(_: HistoryScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen</Text>
    </View>
  );
}

function ScanScreen({ route }: ScanScreenProps) {
  // const { username } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Welcome to Scan Screen, {username}!</Text> */}
      <Text>Welcome to Scan Screen!</Text>
    </View>
  );
}

function ProfileScreen(_: ProfileScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}