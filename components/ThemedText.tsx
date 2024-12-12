import React from 'react';
import { Text } from 'react-native';
import Typography from '@/constants/Typography';

export const ThemedText = ({ variant, children }: { variant?: keyof typeof Typography, children: React.ReactNode }) => {
    return (
        <Text style={Typography[variant ?? "body"]}>
            {children}
        </Text>
    );
};
