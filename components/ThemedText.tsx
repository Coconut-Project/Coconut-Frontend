import React from 'react';
import { Text } from 'react-native';
import Typography from '@/constants/Typography';
import { Colors } from '@/constants/Colors';

export const ThemedText = ({ variant, color, children }: { variant?: keyof typeof Typography, color?: keyof typeof Colors.light, children: React.ReactNode }) => {
    return (
        <Text style={[Typography[variant ?? "body"], { color: Colors.light[color ?? "Black"] }]}>
            {children}
        </Text>
    );
};
