import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { GoProductButton } from "@/components/GoProductButton";
import { ProfileButton } from "@/components/ProfileButton";

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
      <ProfileButton/>
    </View>
  );
}