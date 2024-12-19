import { Colors } from "@/constants/Colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function ProfileButton() {

    const navigation = useNavigation();

    return (
    <View style={styles.container1}>
        <View style={styles.container2}>
            <View style={styles.image_container}>
                <View style={styles.image}>

                </View>
            </View>

            <View style={styles.text}>
                <ThemedText variant="body">A propos de l'écoscore</ThemedText>
            </View>
        
            <View style={styles.button}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.arrowButton}>
                    <MaterialIcons
                        size={24} 
                        color="black" 
                    />
                </TouchableOpacity> */}
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container1: {
    width: "auto",
    height: "auto",
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.light.White,
    justifyContent: "space-between",
  },
  container2: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image_container: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light.lightGreen,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scale: 0.25 }],
  },
  text: {
    flex: 1,
    justifyContent: "center",
  },
  button : {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  arrowButton: {
    width: 20,
    height: 15,
  },
});