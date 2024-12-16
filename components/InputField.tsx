import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { ThemedText } from './ThemedText';
import { Colors } from "@/constants/Colors";

const COLORS = Colors.light;

export const InputField = ({title, textExample, variant = false }: {title:string, textExample:string, variant?:boolean}) => {
  const [text, onChangeText] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
    return(
    <View style={styles.container}>
    <ThemedText variant="heading2" color="Black">
        {title}
    </ThemedText>
    <TextInput
        style={[
        styles.input,
        variant && styles.wrongInput,
        isFocused && { borderColor: COLORS.lightGreen }, 
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        placeholderTextColor="rgba(35, 42, 54, 0.5)"
        placeholder={textExample}
        keyboardType="numeric"
        selectionColor={COLORS.lightGreen}
    />
    {variant && (
        <ThemedText variant="body" color= "Orange">
          Veuillez renseigner le prénom
        </ThemedText>
      )}
    </View>
    );
};

const styles = StyleSheet.create({

    container: {
        width: 325,
        marginBottom:10,
      },
      input: {
        height: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: COLORS.White, 
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
      wrongInput: {
        borderColor: '#E91A10', 
      },
});