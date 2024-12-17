import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import NavbarBg from "../assets/images/navbar_background.svg";

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

function ShapeSVG () {
  return (
    <View style={{
      position: "absolute",
      width: "100%",
      height: "32%",
      bottom: 0,
      zIndex: -1, 
}}>
      <NavbarBg width={50} height={50} />
    </View>
  );
};

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.navbarContainer}>
      <ShapeSVG />
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
          <View style={[styles.navbarSection,
            isMiddle ? styles.middleSection : null,
            index == 0 ? styles.leftSection : null,
            index == 2 ? styles.rightSection : null,
          ]}>
            {/* {isMiddle && <View style={styles.beforeMiddle}></View>}
            {isMiddle && <View style={styles.afterMiddle}></View>} */}
            <TouchableOpacity
              key={route.name}
              onPress={() => navigation.navigate(route.name)}
              style={[styles.navButton, 
                isMiddle ? styles.middleButton : null,
                isMiddle && isFocused && styles.focusedMiddleButton
              ]}>
              <View style={[
                  styles.icon,
                  isFocused && styles.focusedIcon,
                  isMiddle && styles.iconScan,
                ]}>
                {/* <Ionicons name={iconName} size={28} color={isFocused ? '#00FFCC' : '#CCC'} /> */}
                <Text style={[styles.iconText, 
                  !isMiddle && isFocused && styles.focusedText]} >{route.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  // screen: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 25,
    right: 25,
    // height: 75,
    flex: 1,
    // elevation: 5,
  },
    navbarSection: {
      backgroundColor: 'red',
      width: 80,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftSection: {
      borderTopRightRadius:30,
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
    },
    middleSection: {
      backgroundColor: '#121826',
      width: 95,
    },
    rightSection: {
      borderTopLeftRadius:30,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
    },
      navButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121826',
        borderRadius: '50%',
        height: 75,
        width: 75,
        // elevation: 5,
      },
      middleButton: {
        position: 'absolute',
        backgroundColor: '#00FFCC',
        bottom: 30,
        flex:1,
        color: 'white',
        height: 85,
        width: 85,
        borderWidth: 10,
        // borderColor: '#F5F6FA', // background-white
        borderColor: 'rgba(245, 246, 250, 0.0)'
      },
      focusedMiddleButton: {
        height: 115,
        width: 115,
        borderColor: 'white',
        bottom: 15,
      },
      beforeMiddle: {
        position: 'absolute',
        backgroundColor: '#F5F6FA',
        width: 95,
        height: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        bottom:27,left:-3.5,
      },
      afterMiddle: {
        position: 'absolute',
        backgroundColor: '#F5F6FA',
        width: 95,  
        height: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        bottom:27,right:-3.5,
      },
        icon: {
        },
        focusedIcon: {
        },
        iconScan: {
        },
        focusedScan: {
        },
        iconText: {
          color: 'white',
        },
        focusedText: {
          color: '#00FFCC',
        },
});