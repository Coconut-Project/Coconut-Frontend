import { CustomCheckbox } from "@/components/CustomCheckbox";
import { ProductScore } from "@/components/ProductScore";
import { View } from "react-native";

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
    </View>
  );
}
