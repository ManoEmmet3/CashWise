
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SaldoAtual({ saldo }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saldo Atual</Text>
            <Text style={styles.saldo}>R$ {saldo.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 327,
        height: 102,
        padding: 20,
        backgroundColor: '#E5F0DB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.2,
        textAlign: 'center',
        marginBottom: 5,
    },
    saldo: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 41.6,
        color: '#000000',
        textAlign: 'center',
    },
});
