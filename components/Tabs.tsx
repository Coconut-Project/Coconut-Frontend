import * as React from 'react';
import { View, useWindowDimensions, StyleSheet} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {useThemeColors} from "@/hooks/useThemeColors";
import { Shadows } from '@/constants/Shadows';
import { ThemedText } from './ThemedText';

const colors = useThemeColors();

const styles = StyleSheet.create({

    tabsContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        ...Shadows.baseShadow
    },

    tabs:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width:'auto',
        height: 'auto',
        paddingHorizontal: 25,
        paddingVertical: 5
    },

    defaultBackground:{
        backgroundColor: colors.Background,
    },

    variantBackground:{
        backgroundColor: colors.Black
    }
});

const EcoScoreRoute = () => (
    <View style={[styles.tabs, styles.variantBackground]}>
        <ThemedText>Eco</ThemedText>
    </View>
)

const AnalyseRoute = () => (
    <View style={[styles.tabs, styles.variantBackground]}>
        <ThemedText>Analyse</ThemedText>
    </View>
)

const GraphiqueRoute = () => (
    <View style={[styles.tabs, styles.variantBackground]}>
        <ThemedText>Graphique</ThemedText>
    </View>
)

export default function ProductTab() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'ecoscore', title: 'Eco-Score' },
        { key: 'analyse', title: 'Analyse' },
        { key: 'graphique', title: 'Graphique' },
    ]);

    const renderScene = SceneMap({
        ecoscore: EcoScoreRoute,
        analyse: AnalyseRoute,
        graphique: GraphiqueRoute,
    });

    return (
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        />
    );
}