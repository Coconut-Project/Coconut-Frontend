import { InputField } from "@/components/InputField";
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
      <ProductScore score="low" product="tShirt" />
      <InputField title={"Nom"} textExample={"De Santis"}/>
      <InputField title={"Prénom"} textExample={"Léo"} variant= {true}/>
    </View>
  );
}
