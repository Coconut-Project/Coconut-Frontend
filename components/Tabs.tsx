import { ThemedText } from "./ThemedText";
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Shadows } from "@/constants/Shadows";

// Sous-composants
const EcoScore = () => (
  <View style={styles.content}>
    <ThemedText>Hello Éco-Score</ThemedText>
  </View>
);

const Analyse = () => (
  <View style={styles.content}>
    <ThemedText>Hello Analyse</ThemedText>
  </View>
);

const Repartition = () => (
  <View style={styles.content}>
    <ThemedText>Hello Répartition</ThemedText>
  </View>
);

const contents = [
  { label: "Eco-Score", component: <EcoScore /> },
  { label: "Analyse", component: <Analyse /> },
  { label: "Répartition", component: <Repartition /> },
];

export const Tabs = () => {
  const COLORS = Colors.light;
  const [activeTab, setActiveTab] = useState("Eco-Score");

  const renderContent = () => {
    const content = contents.find((content) => activeTab === content.label);
    return content ? content.component : null;
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.tabsContainer,
          { backgroundColor: COLORS.White },
          Shadows.baseShadow,
        ]}
      >
        {contents.map((content) => (
          <TouchableOpacity
            key={content.label}
            style={[
              styles.tabButton,
              activeTab === content.label && { backgroundColor: COLORS.Black },
            ]}
            onPress={() => setActiveTab(content.label)}
          >
            <ThemedText color={activeTab === content.label ? "White" : "Black"}>
              {content.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
      {/* Les 3 sous components s'affichent là */}
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 100,
  },
  tabButton: {
    width: 112,
    height: 28,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
