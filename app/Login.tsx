import "react-native-gesture-handler";
import { InputField } from "@/components/InputField";
import { View } from "react-native";
import { ClassicButton } from "@/components/ClassicButton";
import { NavigationContainer } from "@react-navigation/native";

export default function Login() {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center", 
                alignItems: "center",
              }}
            >
                <InputField title={"Adresse Mail"} textExample={"example@gmail.com"}/>
            <InputField title={"Mot de passe"} textExample={"8 caractère min."}/>
            <ClassicButton label= "Se connecter"></ClassicButton>
        </View>
    );
};