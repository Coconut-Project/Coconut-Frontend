// import * as React from 'react';
// import { View, Text, StyleSheet} from 'react-native';
// import { Colors } from '@/constants/Colors';
// import { Shadows } from '@/constants/Shadows';
// import { ThemedText } from './ThemedText';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const styles = StyleSheet.create({

//     tabsContainer:{
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 100,
//         ...Shadows.baseShadow
//     },

//     tabs:{
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 100,
//         width:'auto',
//         height: 'auto',
//         paddingHorizontal: 25,
//         paddingVertical: 5
//     },

//     defaultBackground:{
//         backgroundColor: Colors.light.White,
//     },

//     variantBackground:{
//         backgroundColor: Colors.light.Black
//     }
// });

// const Tab = createMaterialTopTabNavigator();

// const EcoScoreScreen = () => (
//     <View style={styles.tabs}>
//         <ThemedText variant="body">Eco-Score</ThemedText>
//     </View>
// )

// const AnalyseScreen = () => (
//     <View style={styles.tabs}>
//         <ThemedText variant="body">Eco-Score</ThemedText>
//     </View>
// )

// const GraphiqueScreen = () => (
//     <View style={styles.tabs}>
//         <ThemedText variant="body">Eco-Score</ThemedText>
//     </View>
// )

// export const ProductTab = () => {

//     return(
//             <Tab.Navigator
//             screenOptions={{
//                 tabBarActiveTintColor: '#232A36',
//                 tabBarInactiveTintColor: '#FFFFFF',
//                 tabBarStyle: styles.tabsContainer,
//                 tabBarIndicatorStyle: styles.tabs,
//                 tabBarLabelStyle: {fontSize: 12}
//             }}>
//                 <Tab.Screen name = "Eco-Score" component ={EcoScoreScreen} />
//                 <Tab.Screen name = "Analyse" component ={AnalyseScreen} />
//                 <Tab.Screen name = "Graphique" component ={GraphiqueScreen} />
//             </Tab.Navigator>
        
//     );
// }