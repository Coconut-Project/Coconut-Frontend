import { View } from "react-native";
import Register from "./Register";
import Terms from "./Terms";

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
    <Terms/>
    </View>
  );
}
