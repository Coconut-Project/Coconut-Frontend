import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { Shadows } from "@/constants/Shadows";

export const CustomCheckbox = () => {
  const COLORS = Colors.light;
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={[styles.checkbox, Shadows.baseShadow]}
          value={isChecked}
          onValueChange={setChecked}
          color={COLORS.lightGreen}
        />
        <ThemedText>Custom Checkbox</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
    borderRadius: 5,
    width: 25,
    height: 25,
  },
});
