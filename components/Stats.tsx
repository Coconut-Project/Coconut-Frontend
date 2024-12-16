import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";


export function Stats({title="Titre", progress=50, description="Texte compliqué"}) {
    
    const [isTextVisible, setIsTextVisible] = useState(false);
    const toggleTextVisibility = () => {setIsTextVisible(!isTextVisible);};

    return (
        <View style={styles.container1}>
            <View style={styles.container2}>

                <View style={styles.image}>
                    {/* Balise pour mettre l'image SVG */}
                </View>

                <View style={styles.container3}>
                    <View style={styles.headerLine}>
                        <ThemedText variant="heading1">{title}</ThemedText>
                        <ThemedText variant="heading2">{progress < 30 ? "Impact faible" : progress < 60 ? "Impact modéré" : "Impact élevé"}</ThemedText>
                    </View>

                    <View style={styles.progress_bar_container}>
                        <View style={[styles.progress_bar, {width: `${progress}%`}]}/>
                    </View>

                    <View style={styles.bottomLine}>
                        <ThemedText variant="heading2">{progress}%</ThemedText>
                        <TouchableOpacity onPress={toggleTextVisibility} style={styles.arrowButton}>
                            <MaterialIcons
                                name={isTextVisible ? 'expand-less' : 'expand-more'} 
                                size={24} 
                                color="black" 
                            />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

            {isTextVisible && (
                <ScrollView style={styles.scrollView}>
                    <ThemedText variant="body">{description}</ThemedText>
                </ScrollView>
            )}

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
        width: 'auto',
        height: 10,
        borderRadius: 100,
        backgroundColor: Colors.light.Purple,
    },
    bottomLine: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
    },
    arrowButton: {
        width: 20,
        height: 15,
    },
    scrollView: {
        width: 'auto',
        height: 'auto',
    },
});
