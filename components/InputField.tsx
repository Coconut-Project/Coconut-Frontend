import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { ThemedText } from './ThemedText';
import { Colors } from "@/constants/Colors";
import { Shadows } from '@/constants/Shadows';

const COLORS = Colors.light;

export const InputField = ({title, textExample, variant = false }: {title:string, textExample:string, variant?:boolean}) => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
        <ThemedText variant='heading2' color='Black'>{title}</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholderTextColor= "rgba(35, 42, 54, 0.5)"
          placeholder="Nom"
          keyboardType="numeric"
          selectionColor={COLORS.lightGreen}
        />
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        width: 325,
        marginVertical: 10,
      },

    input: {
        height: 'auto',
        width: 375,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 5,
        borderWidth: 0,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
});