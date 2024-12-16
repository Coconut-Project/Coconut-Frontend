import "react-native-gesture-handler";
import { InputField } from "@/components/InputField";
import { View } from "react-native";
import { ClassicButton } from "@/components/ClassicButton";
import { NavigationContainer } from "@react-navigation/native";

export default function Register() {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center", 
                alignItems: "center",
              }}
            >
            <View
            style={{
                marginBottom:50,
            }}>
                <InputField title={"Nom"} textExample={"Nom"} variant={true}/>
                <InputField title={"Prenom"} textExample={"Prenom"}/>
                <InputField title={"Adresse Mail"} textExample={"example@gmail.com"}/>
            </View>
            <View
                style={{
                marginBottom:10,
                }}>
            <InputField title={"Mot de passe"} textExample={"8 caractère min."}/>
            <InputField title={"Confirmer le mot de passe"} textExample={"8 caractère min."}/>
            <ClassicButton label= "Continuer"></ClassicButton>
            </View>
        </View>
    );
};