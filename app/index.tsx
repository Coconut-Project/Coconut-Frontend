import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Stats } from "@/components/Stats";

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
      <Stats/>
    </View>
  );
}
