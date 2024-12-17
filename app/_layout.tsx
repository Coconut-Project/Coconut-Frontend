import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { SvgProps, Path } from "react-native-svg"

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

// const NavbarSVG = (props: SvgProps) => (
//   <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 77" {...props}>
//     <Path
//       d="M79.9 14.9C71.2 5.4 58.9 0 46 0h-7.6C17.2 0 0 17.2 0 38.5S17.2 77 38.4 77h173.3c21.2 0 38.4-17.2 38.4-38.5S232.8 0 211.6 0h-7.5c-13 0-25.3 5.5-34 15.2l-17.6 19.6C138 50.9 112.8 51 98.2 35L79.9 15Z"
//       style={{
//         fill: "#232a36",
//         fillRule: "evenodd",
//       }}
//     />
//   </Svg>
// )

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.navbarContainer}>
      {/* <NavbarSvg /> */}
      {/* <Svg
        fill="none"
        style={styles.navbarBackground}
      >
        <Path
          fill="#232A36"
          fillRule="evenodd"
          d="M69.193 12.796A39.56 39.56 0 0 0 40.06 0H33.5C15.275 0 .5 14.775.5 33s14.775 33 33 33h149c18.225 0 33-14.775 33-33s-14.775-33-33-33h-6.423a39.423 39.423 0 0 0-29.254 12.996l-15.146 16.766c-12.477 13.81-34.127 13.9-46.718.195l-15.766-17.16Z"
          clipRule="evenodd"
        />
      </Svg> */}
      <Svg fill="none"
        style={styles.navbarBackground}>
        <Path
          fill="#232a36"
          fillRule="evenodd"
          d="M79.9 14.9C71.2 5.4 58.9 0 46 0h-7.6C17.2 0 0 17.2 0 38.5S17.2 77 38.4 77h173.3c21.2 0 38.4-17.2 38.4-38.5S232.8 0 211.6 0h-7.5c-13 0-25.3 5.5-34 15.2l-17.6 19.6C138 50.9 112.8 51 98.2 35L79.9 15Z"
          clipRule="evenodd"
        />
      </Svg>
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
  navbarBackground: {
    width: 250,
    height: 77,
    position: 'absolute',
    // elevation: 5,
  },
    navbarSection: {
      width: 80,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    middleSection: {
      // backgroundColor: '#121826',
      width: 80,
    },
      navButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#121826',
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
        // borderColor: '#F5F6FA', // background-white
        // borderColor: 'rgba(245, 246, 250, 0.0)',
      },
      focusedMiddleButton: {
        height: 105,
        width: 105,
        borderWidth: 10,
        borderColor: 'white',
        bottom: 20,
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