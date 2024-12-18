import { Colors } from "@/constants/Colors";
import { Shadows } from "@/constants/Shadows";
import Typography from "@/constants/Typography";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text} from "react-native";
import { StyleSheet } from 'react-native';
import Svg, { G, Path } from "react-native-svg";

const COLORS = Colors.light;
const COLORSGRADIENT = Colors.gradient;

export const Profile = ({ userName = "Léo De Santis", welcomeText = "Bon retour parmi nous !" }) => {
    return (
        <View style={[styles.header, Shadows.baseShadow]}>
                        <LinearGradient
                            colors={[COLORSGRADIENT.greenGradient.color1, COLORSGRADIENT.greenGradient.color2]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.gradientBackground}
                        >
                            {<View style={styles.avatar}>
                                <Svg width="30" height="20" viewBox="0 0 31 30" fill="none">
                                    <G clipPath="url(#e)">
                                        <Path d="M25.5 26.25V23.75C25.5 22.4239 24.9732 21.1521 24.0355 20.2145C23.0979 19.2768 21.8261 18.75 20.5 18.75H10.5C9.17392 18.75 7.90215 19.2768 6.96447 20.2145C6.02678 21.1521 5.5 22.4239 5.5 23.75V26.25"
                                            stroke="white" strokeWidth={3} stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M15.5 13.75C18.2614 13.75 20.5 11.5114 20.5 8.75C20.5 5.98858 18.2614 3.75 15.5 3.75C12.7386 3.75 10.5 5.98858 10.5 8.75C10.5 11.5114 12.7386 13.75 15.5 13.75Z"
                                            stroke="white" strokeWidth={3} stroke-linecap="round" stroke-linejoin="round" />
                                    </G>
                                </Svg>
                            </View>}
                        </LinearGradient>
                        <View style={styles.headerTextContainer}>
                            <Text style={[Typography.heading1, styles.userName]}>{userName}</Text>
                            <Text style={[Typography.body, styles.subText]}>{welcomeText}</Text>
                        </View>
                    </View>

    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        borderRadius: 20,
    },
    gradientBackground: {
        width: 40, // Taille du rond
        height: 40,
        borderRadius: 20, // Bords arrondis
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerTextContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    userName: {
        color: COLORS.Black,
    },
    subText: {
        color: '#777',
    },
});
