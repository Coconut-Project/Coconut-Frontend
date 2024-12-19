import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { ProfilButton } from './ProfilButton'; // Ton composant bouton existant
import { Colors } from '@/constants/Colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Typography from '@/constants/Typography';

const COLORS = Colors.light;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const ProfilePage = () => {

    return (
        <SafeAreaProvider>
            <SafeAreaView >
                <ScrollView contentContainerStyle={styles.container}>
                    
                    <View style={styles.headerContainer}>
                        <Text style={[Typography.button,styles.headerBack]}>&#8592;</Text>
                        <Text style={[Typography.body, styles.title]}>Profil </Text>
                    </View>

                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarCircle} />
                        <Text style={styles.name}>Léo</Text>
                        <Text style={styles.email}>leo.desantispro@gmail.com</Text>
                    </View> 

                    <View>
                        <Text style={styles.sectionTitle}>Général</Text>
                        <View style={styles.buttonSection}>
                            <ProfilButton label="Modifier le compte" number={1}
                                onPress={() => console.log('Modifier le compte')} />
                            <ProfilButton
                                label="Sécurité & Confidentialité"
                                number={2}
                                onPress={() => console.log('Sécurité & Confidentialité')}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>Ressources</Text>
                        <ProfilButton
                            label="À propos de l’éco-score"
                            number={3}
                            onPress={() => console.log('À propos de l’éco-score')}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.Background,
        // paddingHorizontal: 75, ça marche
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: screenWidth,
        paddingVertical: 25,
        paddingHorizontal: 20,
    },
    headerBack: {
        marginRight: 20,
        color: COLORS.Black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: COLORS.Black,
        lineHeight: 20,
        textAlign: 'center',
        marginHorizontal: 96,
    },
    avatarContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    avatarCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#777',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.Black,
    },
    email: {
        fontSize: 14,
        color: '#777',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: COLORS.Black,
    },
    buttonSection: {
        marginTop: 25,
        gap: 0, // Espacement uniforme
    },
});

