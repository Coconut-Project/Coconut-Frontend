// import React from 'react';
import { Pressable, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});

function doNothing() {
}

export const Navbar = ({ state = 0}: { state: number}) => {
  return (

    <View style={styles.shadow}>
      <View style={[styles.button, styles.defaultBackground]}>
        <Pressable onPress={doNothing}>
          <Text>center</Text>
        </Pressable>
      </View>
      <View style={[styles.button, styles.defaultBackground]}>
        <View style={[styles.button, styles.defaultBackground]}>
          <Pressable onPress={doNothing}>
            <Text>Left</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.defaultBackground]}>
          <Pressable onPress={doNothing}>
            <Text>Right</Text>
          </Pressable>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
      </TouchableOpacity>
    </View>
  );
};
