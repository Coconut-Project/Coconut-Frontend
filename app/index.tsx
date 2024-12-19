import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { GoProductButton } from "@/components/GoProductButton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        gap: 20,
        marginTop: 20,
        marginHorizontal: 20,
      }}
    >
      {/* <ThemedText variant="display2">Welcome to Coconut !</ThemedText> */}
      <GoProductButton
        title="T-Shirt Bershka"
        progress={80}
        date="10/12/2024"
        time="14:56"
      />
    </View>
  );
}
