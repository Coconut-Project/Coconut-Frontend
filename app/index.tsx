import { View, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ClassicButton } from "@/components/ClassicButton";
import { Navbar } from "@/components/Navbar";


export default function App() {
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
    </View>
  );
};