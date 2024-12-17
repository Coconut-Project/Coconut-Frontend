import { View } from "react-native";
import Terms from "./Terms";
import { ThemedText } from "@/components/ThemedText";

export default function ScanTuto() {
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
        <ThemedText variant='display1' color='Black' children/>
    </View>
  );
}
