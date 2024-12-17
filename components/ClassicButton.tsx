import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from './ThemedText';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 15,
    width: 325,
    height: 54,
  },

  defaultBackground:
  {
    backgroundColor: "#30F6B7",
  },

  variantBackground:
  {
    backgroundColor: '#F5F6FA',
  },

  gradientBorder: {
    padding: 2,
    borderRadius: 12,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});

export const ClassicButton = ({ label, variant = false }: { label: string, variant?: boolean }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.shadow}>
        {variant ? (
          <LinearGradient
            colors={['#30F6B7', '#3CC3AA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
          >
            <View style={[styles.button, styles.variantBackground]}>
              <ThemedText variant="button">{label}</ThemedText>
            </View>
          </LinearGradient>
        ) : (
          <View style={[styles.button, styles.defaultBackground]}>
            <ThemedText variant="button">{label}</ThemedText>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
