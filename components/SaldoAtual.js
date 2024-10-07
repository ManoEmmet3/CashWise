// components/SaldoAtual.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SaldoAtual({ saldo }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Valor Atual</Text>
            <Text style={styles.saldo}>R$ {saldo.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center', // Centralizar o texto
        marginBottom: 5,
    },
    saldo: {
        fontSize: 24,
        color: '#2196F3',
        textAlign: 'center', // Centralizar o texto
    },
});
