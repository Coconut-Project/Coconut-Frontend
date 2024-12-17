import { Colors } from "@/constants/Colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';


export function GoProductButton({title="title", progress=50, date="date", time="time"}) {

    const navigation= useNavigation();

    return (
        <View style={styles.container1}>
            <View style={styles.container2}>

                <View style={styles.image}>
                    {/* Balise pour mettre l'image SVG */}
                </View>

                <View style={styles.container3}>
                    <View style={styles.headerLine}>
                        <ThemedText variant="heading3">{title}</ThemedText>
                        <ThemedText variant="body">{date} - {time}</ThemedText>
                    </View>

                <View style={styles.progress_bar_container}>
                    {/* <LinearGradient
                        colors={["#F69030", "#F63030"]}
                        style={[styles.progress_bar, { width: `${progress}%` }]}
                    /> */}
                </View>

                    <View style={styles.bottomLine}>
                        <ThemedText variant="body">{progress < 20 ? "Impact faible" : progress < 50 ? "Impact modéré" : "Impact élevé"}</ThemedText>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.arrowButton}>
                            <MaterialIcons
                                name={} 
                                size={24} 
                                color="black" 
                            />
                        </TouchableOpacity> */}
                    </View>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        width: 'auto',
        height: 'auto',
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.light.White,
    },
    container2: {
        width: 'auto',
        height: 'auto',
    },
    image: {
        width: 40,
        height: 40,
    },
    container3: {
        width: 'auto',
        height: 'auto',
    },
    headerLine: {
        width: 'auto',
        height: 'auto',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    progress_bar_container: {
        width: 255,
        height: 10,
        backgroundColor: Colors.light.Background,
        borderRadius: 100,
        overflow: "hidden",
        marginBottom: 8,
        marginTop: 8,
    },
    progress_bar: {
        height: 10,
        borderRadius: 100,
    },
    bottomLine: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    arrowButton: {
        width: 20,
        height: 15,
    },
})