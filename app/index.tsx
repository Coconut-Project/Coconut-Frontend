import { InputField } from "@/components/InputField";
import { ProductScore } from "@/components/ProductScore";
import { View } from "react-native";
import Register from "./Register";
import Login from "./Login";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Login/>
    </View>
  );
}
