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
      <View style={styles.section}>
        <Checkbox
          style={[styles.checkbox, Shadows.baseShadow]}
          value={isChecked}
          onValueChange={setChecked}
          color={COLORS.lightGreen}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    borderRadius: 5,
    width: 25,
    height: 25,
  },
});
