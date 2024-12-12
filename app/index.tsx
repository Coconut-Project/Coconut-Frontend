import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Welcome to Coconut !</ThemedText>
    </View>
  );
}
