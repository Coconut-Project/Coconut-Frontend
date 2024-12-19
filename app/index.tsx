import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ClassicButton } from "@/components/ClassicButton";
import { Steps } from "@/components/Steps";
import { DropdownText } from "@/components/DropdownText";
import {ProfilePage} from "@/components/ProfilePage";

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
      {/* <ThemedText variant="display2">Welcome to Coconut !</ThemedText>
      <Steps currentStep={1} totalSteps={3}/>
      <ClassicButton label="C'est parti !" />
      <ClassicButton variant label="Reprendre la photo" /> */}
      {/* <DropdownText/> */}
      < ProfilePage />
    </View>
  );
}
