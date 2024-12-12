import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Progress from 'react-native-progress';

export const Steps = () => {
    const [progress, setProgress] = useState(1);

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <Progress.Circle
                    size={120}
                    progress={progress / 3}
                    color="#76c7c0"
                    thickness={10}
                />
                <Text style={styles.progressText}>{`${progress} / 3 `}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressContainer: {
        position: 'relative',
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

