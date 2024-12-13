import { CustomCheckbox } from "@/components/CustomCheckbox";
import { ProductScore } from "@/components/ProductScore";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ClassicButton } from "@/components/ClassicButton";
import { Steps } from "@/components/Steps";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomCheckbox/>
      <ThemedText variant="display2">Welcome to Coconut !</ThemedText>
      <Steps currentStep={1} totalSteps={3}/>
      <ClassicButton label="C'est parti !" />
      <ClassicButton variant label="Reprendre la photo" />
    </View>
  );
}
