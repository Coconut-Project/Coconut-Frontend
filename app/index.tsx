import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Tabs } from "@/components/Tabs";
import { ProductScore } from "@/components/ProductScore";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: 20,
      }}
    >
      <ThemedText variant="display2">Welcome to Coconut !</ThemedText>
      <Tabs />
    </View>
  );
}
