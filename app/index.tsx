import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ClassicButton } from "@/components/ClassicButton";
import { Stats } from "@/components/Stats";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
     }}
    >
      <ThemedText variant="display2">Welcome to Coconut !</ThemedText>
      <ClassicButton label="C'est parti !" />
      <ClassicButton variant label="Reprendre la photo" />
    </View>
  );
}
