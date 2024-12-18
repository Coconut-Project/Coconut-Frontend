import * as React from 'react';
import { ScrollView, Text, View } from 'react-native'
import { ProfilButton } from './ProfilButton'
import Typography from '@/constants/Typography';
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Profile } from './Profile';


const COLORS = Colors.light;
const COLORSGRADIENT = Colors.gradient;

export const DropdownText = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.container}>
                    <Profile userName="Guilhem Rebéjac" welcomeText=" Bienvenue sur Coconut !"/>
                    <View style={styles.titleContainer}>
                        <Text style={[Typography.display2, styles.title]}>Comprendre notre éco-score</Text>
                        <Text style={[Typography.body, styles.description]}>
                            Notre éco-score repose sur une analyse précise et rigoureuse des impacts environnementaux de vos vêtements,
                            il est basé en grande partie sur l'API Ecobalyse. Nous évaluons les impacts à chaque étape du cycle de vie
                            d'un vêtement, de la production des matières premières jusqu'à sa fin de vie.
                        </Text>
                    </View>

                    <View style={styles.buttonSection}>
                        <ProfilButton label="Eco score global" number={1} onPress={() => console.log('Eco score global')} />
                        <ProfilButton label="Catégories d’impacts" number={2} onPress={() => console.log('Catégories d’impacts')} />
                        <ProfilButton label="Calcul des impacts" number={3} onPress={() => console.log('Calcul des impacts')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.Background,
        padding: 20,
    },
    titleContainer: {
        marginBottom: -10,
    },
    title: {
        color: COLORS.Black,
        marginBottom: 5,
    },
    description: {
        color: COLORS.Black,
        lineHeight: 20,
        textAlign: 'justify',
    },
    buttonSection: {
        marginTop: 25,
        gap: 0, // Espacement uniforme
    },
    centerButton: {
        backgroundColor: COLORS.Background,
        borderRadius: 50,
    },
});
