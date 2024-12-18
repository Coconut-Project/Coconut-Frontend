import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg"
import { Colors } from "@/constants/Colors";
import { ProfileIcon } from "../components/svg/navigation/Profile";
import { ScanIcon } from "../components/svg/navigation/Scan";
import { HistoryIcon } from "../components/svg/navigation/History";

const Palet = Colors.light;

export const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.navbarContainer}>
      <Svg fill="none"
        style={styles.navbarBackground}>
        <Path
          fill={Palet.Black}
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
          <View key={route.name} style={styles.navbarSection}>
            <TouchableOpacity
              onPress={() => navigation.navigate(route.name)}
              style={[styles.navButton, 
                isMiddle ? styles.middleButton : null,
                isMiddle && isFocused && styles.focusedMiddleButton
              ]}>
              <View style={[
                  styles.icon,
                  isFocused && styles.focusedIcon,
                  // isMiddle && styles.iconScan,
                ]}>
                {index === 0 && <HistoryIcon fill={isFocused ? Palet.lightGreen : Palet.White}/>}
                {index === 1 && <ScanIcon />}
                {index === 2 && <ProfileIcon stroke={isFocused ? Palet.lightGreen : Palet.White}/>}
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Palet.Background,
  },
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 25,
    right: 25,
    flex: 1,
  },
  navbarBackground: {
    width: 250,
    height: 77,
    position: 'absolute',
  },
    navbarSection: {
      width: 80,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
      navButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        height: 75,
        width: 75,
      },
      middleButton: {
        position: 'absolute',
        backgroundColor: Palet.lightGreen,
        bottom: 28,
        flex:1,
        color: Palet.White,
        height: 85,
        width: 85,
      },
      focusedMiddleButton: {
        height: 105,
        width: 105,
        borderWidth: 10,
        borderColor: Palet.White,
        bottom: 18,
      },
        icon: {
          color: Palet.lightGreen
        },
        focusedIcon: {
        },
});