import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';
import { Shadows } from '@/constants/Shadows';
import Svg, { G, Path } from "react-native-svg";

const COLORS = Colors.light;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.White,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 20,
        ...Shadows.baseShadow,
    },

    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    numberCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginRight: 10,
    },

    numberCircleBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLORS.lightGreen,
        borderRadius: 15,
        opacity: 0.2,
    },

    numberText: {
        color: COLORS.Black,
    },
});

export const ProfilButton = ({ label, number, onPress }: { label: string, number: number, onPress: () => void; }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.numberContainer}>
                <View style={styles.numberCircle}>
                    <View style={styles.numberCircleBackground} />
                    <Text style={styles.numberText}>{number}</Text>
                </View>
                <ThemedText>
                    {label}
                </ThemedText>
            </View>
            <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" >
                <G clipPath="url(#e)">
                    <Path d="M7.5 5.5L12.5 10.5L7.5 15.5" stroke="#232A36" stroke-linecap="round" stroke-linejoin="round" />
                </G>
            </Svg>
        </TouchableOpacity>
    );
};
