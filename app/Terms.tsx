import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar, View, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Colors } from "@/constants/Colors";
import { ClassicButton } from '@/components/ClassicButton';
import { CustomCheckbox } from '@/components/CustomCheckbox';
import { useNavigation } from "@react-navigation/native";


const COLORS = Colors.light;

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      margin:25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    scrollView: {
      backgroundColor: COLORS.White,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
  
    viewContent: {
      marginBottom:15,
      gap:10
    },
  
    flexView:{
      flexDirection: "row",
      alignItems: "center",
      marginVertical:10,
      alignSelf: 'flex-start',
      flexShrink: 1,
      gap:5,
    },
  
    underContainer: {
      gap:5,
    },

    backButton: {

    }
  });

export default function Terms({navigation}){

    const navigation = useNavigation();

    return(
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
        <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <ThemedText variant="body" color="Black">
          ← Retour
        </ThemedText>
      </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
            <View style={styles.viewContent}>
                <ThemedText variant='heading1' color='Black'>
                Conditions d’utilisation
                </ThemedText>
                <ThemedText variant='heading3' color='Black'>
                Dernière mise à jour : 7 Déc. 2024
                </ThemedText>
                <ThemedText variant='body' color='Black'>
                Bienvenue sur Coconut, une application dédiée à 
                l’évaluation de l’impact écologique des vêtements ! 
                En utilisant l'application Coconut, vous acceptez les 
                présentes conditions générales d’utilisation (CGU). 
                Veuillez les lire attentivement avant de créer un compte 
                ou d’utiliser les services de l’application.
                </ThemedText>
            </View>
            <View style={styles.viewContent}>
                <ThemedText variant='heading2' color='Black'>
                1. Objet des CDU
                </ThemedText>
                <ThemedText variant='body' color='Black'>
                Les présentes conditions définissent les modalités d’utilisation 
                de l’application Coconut et des services proposés, notamment :{'\n'}
                    - La création d’un compte utilisateur ;{'\n'}
                    - Le scan des étiquettes de vêtements pour évaluer leur éco-score ;{'\n'}
                    - La visualisation des scores écologiques par thématiques ;{'\n'}
                    - L’accès à l’historique et au score moyen des vêtements scannés.
                </ThemedText>
            </View>
            <View style={styles.viewContent}>
                <ThemedText variant='heading2' color='Black'>
                2. Accès et utilisation des services
                </ThemedText>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    2.1 Inscription et création de compte
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Pour accéder à toutes les fonctionnalités, vous devez créer un compte 
                    utilisateur. Vous vous engagez à fournir des informations exactes et à 
                    jour lors de l'inscription. La responsabilité de la confidentialité de 
                    votre mot de passe vous incombe.
                    </ThemedText>
                </View>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    2.2 Utilisation personnelle
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Les services de Coconut sont destinés à une utilisation strictement 
                    personnelle. Toute utilisation commerciale ou abusive est interdite.
                    </ThemedText>
                </View>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    2.3 Restrictions
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Vous vous engagez à ne pas :{'\n'}
                        - Utiliser l'application à des fins illégales ou non conformes à ces CGU ;{'\n'}
                        - Modifier ou tenter d’accéder aux systèmes ou bases de données de Coconut ;{'\n'}
                        - Partager des contenus offensants ou inappropriés lors de l’utilisation de fonctionnalités sociales (si présentes).
                    </ThemedText>
                </View>
            </View>
            <View style={styles.viewContent}>
                <ThemedText variant='heading2' color='Black'>
                3.  Données personnelles et confidentialité
                </ThemedText>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    3.1 Collecte de données
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    En utilisant Coconut, certaines données personnelles seront collectées, notamment :{'\n'}
                        - Vos informations de compte (nom, adresse e-mail, etc.) ;{'\n'}
                        - Les données des vêtements scannés et votre historique d’utilisation.
                    </ThemedText>
                </View>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    3.2 Utilisation des données
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Vos données sont utilisées pour :{'\n'}
                        - Fournir et améliorer les services de Coconut ;{'\n'}
                        - Générer votre éco-score et vos statistiques personnelles ;
                    </ThemedText>
                </View>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    3.3 Partage des données
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Vos données personnelles ne seront jamais partagées avec des tiers 
                    sans votre consentement explicite, sauf en cas d’obligation légale.
                    </ThemedText>
                </View>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    3.4 Droit d’accès et de suppression
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Conformément au RGPD (ou toute autre loi locale applicable), vous 
                    avez le droit de demander l'accès, la modification ou la suppression 
                    de vos données personnelles. Veuillez nous contacter à leo.desantispro@gmail.com 
                    pour exercer vos droits.
                    </ThemedText>
                </View>
            </View>
            <View style={styles.viewContent}>
                <ThemedText variant='heading2' color='Black'>
                4.  Responsabilités
                </ThemedText>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    4.1 Responsabilités de Coconut
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Nous nous efforçons de fournir des services précis et fiables. Cependant, 
                    l’éco-score généré est basé sur des données publiques et tiers, et Coconut 
                    ne peut garantir une précision absolue.
                    </ThemedText>
                </View>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    4.2 Responsabilités de l'utilisateur
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Vous êtes seul responsable des informations que vous fournissez et de 
                    l’utilisation que vous faites des résultats. Coconut ne saurait être 
                    tenu responsable des décisions prises sur la base de ces résultats.
                    </ThemedText>
                </View>
                <View style={styles.underContainer}>
                    <ThemedText variant='heading3' color='Black'>
                    4.3 Disponibilité du service
                    </ThemedText>
                    <ThemedText variant='body' color='Black'>
                    Coconut se réserve le droit de suspendre temporairement les services 
                    pour maintenance ou en cas de force majeure.
                    </ThemedText>
                </View>
            </View>
            <View style={styles.viewContent}>
                <ThemedText variant='heading2' color='Black'>
                5. Propriété intellectuelle
                </ThemedText>
                <ThemedText variant='body' color='Black'>
                Coconut et son contenu (textes, logos, graphiques, algorithmes, etc.) sont 
                protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, 
                modification ou utilisation non autorisée est strictement interdite. Coconut et 
                son contenu (textes, logos, graphiques, algorithmes, etc.) sont protégés par les 
                lois relatives à la propriété intellectuelle. Toute reproduction, modification ou 
                utilisation non autorisée est strictement interdite.
                </ThemedText>
            </View>
            <View style={styles.viewContent}>
            <ThemedText variant='heading2' color='Black'>
                6. Modification des CGU
                </ThemedText>
                <ThemedText variant='body' color='Black'>
                Coconut se réserve le droit de modifier les présentes CGU à tout moment. Les 
                utilisateurs seront notifiés des modifications importantes, et l’utilisation 
                continue de l’application impliquera l’acceptation des nouvelles conditions.
                </ThemedText>
            </View>
            <View style={styles.viewContent}>
                <ThemedText variant='heading2' color='Black'>
                7. Résiliation
                </ThemedText>
                <ThemedText variant='body' color='Black'>
                Vous pouvez résilier votre compte à tout moment en nous contactant à 
                leo.desantispro@gmail.com. Coconut peut suspendre ou résilier un compte en cas de 
                violation des présentes conditions.
                </ThemedText>
            </View>
            <View style={styles.viewContent}>
                <ThemedText variant='heading2' color='Black'>
                8. Droit applicable et litiges
                </ThemedText>
                <ThemedText variant='body' color='Black'>
                Ces conditions d'utilisation sont régies par les lois françaises. En cas de litige, 
                vous acceptez de tenter une résolution amiable avant d'engager toute procédure 
                judiciaire.
                </ThemedText>
            </View>
            <View style={styles.viewContent}>
                <ThemedText variant='heading2' color='Black'>
                9. Contact
                </ThemedText>
                <ThemedText variant='body' color='Black'>
                Pour toute question ou demande relative à ces CGU, veuillez nous contacter à :{'\n'}
                E-mail : leo.desantispro@gmail.com
                </ThemedText>
            </View>
        </ScrollView>
        <View style={styles.flexView}>
            <CustomCheckbox/>
            <ThemedText variant='body' color="Black">J'accepte les conditions d'utilisation</ThemedText>
        </View>
        <ClassicButton 
        label={'Continuer'} 
        onPress={() => navigation.navigate("Register")}/>
        </SafeAreaView>
    </SafeAreaProvider>
    );
};

