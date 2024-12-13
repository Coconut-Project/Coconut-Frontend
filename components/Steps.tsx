import React from "react";
import { View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "baseline",
        gap: 2,
    },
    stepText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#00D8B6",
    },
    totalStepsText: {
        fontSize: 18,
        color: "#000",
        fontWeight: "400",
    },
});


export const Steps = ({ currentStep, totalSteps }: { currentStep: number, totalSteps: number }) => {

    const progress = currentStep / totalSteps;
    const COLORS = Colors.light

    return (
        <View style={styles.container}>
            <Progress.Circle
                size={55}
                progress={progress}
                showsText={false}
                thickness={2}
                color={COLORS.lightGreen}
                unfilledColor={COLORS.White}
                borderWidth={0}
            />
            <View style={styles.textContainer}>
                <ThemedText variant="heading2" color="lightGreen">{currentStep}</ThemedText>
                <ThemedText variant="heading2">/</ThemedText>
                <ThemedText variant="heading2">{totalSteps}</ThemedText>
            </View>
        </View>
    );
};
