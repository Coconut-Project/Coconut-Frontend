import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ClassicButton } from "@/components/ClassicButton";
import { LogoLightGreen } from "@/components/svg/logo/LogoLightGreen";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <LogoLightGreen/>
      <View style={styles.section}>
        <ThemedText variant="display2">Bienvenue sur Coconut !</ThemedText>
        <ThemedText variant="body">L'éco-score textile à portée de main.</ThemedText>
      </View>
      </View>
      <ClassicButton label="C'est parti !"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  section: {
    alignItems: "center",
    marginTop: 20,
  },
  checkbox: {
    margin: 8,
    borderRadius: 5,
    width: 25,
    height: 25,
  },

  main:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  }
});
