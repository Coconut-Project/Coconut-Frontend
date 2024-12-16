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
            style={[styles.tabButton, 
              isMiddle ? styles.middleTab : null
            ]}>
            {isMiddle && <View style={styles.beforeMiddle}></View>}
            {isMiddle && <View style={styles.afterMiddle}></View>}
            <View style={[
                styles.iconContainer,
                isFocused && styles.focusedIcon,
                isMiddle && styles.iconScan,
                isMiddle && isFocused && styles.focusedScan
              ]}>
              {/* <Ionicons name={iconName} size={28} color={isFocused ? '#00FFCC' : '#CCC'} /> */}
              <Text style={[styles.iconText, 
                !isMiddle && isFocused && styles.focusedText]} >{route.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      {/* <View style={styles.backgroundBottom}></View> */}
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
    backgroundColor: '#121826',
    borderRadius: 50,
    height: 75,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 75,
    right: 75,
    elevation: 5,
  },
  backgroundBottom: {
    backgroundColor: '#121826',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121826',
    height: 75,
    width: 75,
    borderRadius: 50,
    // elevation: 5,
  },
  middleTab: {
    position: 'absolute',
    bottom: 30,
    right:95,
    left:95,
    color: 'white',
  },
  iconScan: {
    backgroundColor: '#00FFCC',
    width: 85,
    height: 85,
  },
  focusedScan: {
    borderWidth: 10,
    borderColor: 'white',
    width: 90,
    height: 90,
  },
  beforeMiddle: {
    position: 'absolute',
    backgroundColor: '#F5F6FA',
    width: 85,
    height: 85,
    borderRadius: 50,
    right:10,
  },
  afterMiddle: {
    position: 'absolute',
    backgroundColor: '#F5F6FA',
    width: 85,
    height: 85,
    borderRadius: 50,
    left:10,
    },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
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