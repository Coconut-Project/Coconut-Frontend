import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBarContainer}>
      {/* Loop through each tab */}
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // Define the icon for each tab
        let iconName;
        if (route.name === 'History') iconName = 'time-outline';
        else if (route.name === 'Scan') iconName = 'scan-circle-outline';
        else if (route.name === 'Profile') iconName = 'person-outline';

        const isMiddle = index === 1;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}
          >
            <View style={[
                styles.iconContainer,
                isMiddle ? styles.middleIcon : null, // Add special style for middle icon
                isFocused && styles.focusedIcon,
              ]}>
              {/* <Ionicons name={iconName} size={28} color={isFocused ? '#00FFCC' : '#CCC'} /> */}
              <Text style={[styles.iconText, isFocused && styles.focusedText]} >{route.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'row',
    // backgroundColor: '#121826',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 5,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
    middleIcon: {
      // position: 'absolute',
      // bottom: 50,
      backgroundColor: '#00FFCC',
      color: 'white',
      width: 75,
      height: 75,
    },
  focusedIcon: {
    // backgroundColor: '#00FFCC',
  },
  iconText: {
    color: 'white',
  },
  focusedText: {
    color: '#00FFCC',
  },
});

// function RootStack() {
//   return (
//     <View style={{ flex: 1}}>
//       <Stack.Navigator>
//             <Stack.Screen name="History" component={HistoryScreen} />
//             <Stack.Screen name="Scan" component={ScanScreen} />
//             <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     // <NavigationContainer>
//       <RootStack />
//     // </NavigationContainer>
//   );
// }