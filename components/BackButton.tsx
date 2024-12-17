import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useNavigation } from "@react-navigation/native";

export default function Terms() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Bouton Retour */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <ThemedText variant="body" color="Black">
          ← Retour
        </ThemedText>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    alignSelf: "flex-start", // Place le bouton retour en haut à gauche
    marginVertical: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    marginTop: 20,
    alignItems: "center",
  },
});
