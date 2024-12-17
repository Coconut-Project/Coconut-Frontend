import "react-native-gesture-handler";
import { InputField } from "@/components/InputField";
import { View } from "react-native";
import { ClassicButton } from "@/components/ClassicButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/NavigationType";

export default function Register({}) {
        type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Terms">;
        const navigation = useNavigation<NavigationProps>();
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
            <ClassicButton label= "Continuer" onPress={() => navigation.navigate("ScanTuto")}/>
            </View>
        </View>
    );
};