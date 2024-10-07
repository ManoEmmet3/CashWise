// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SaldoAtual from '../components/SaldoAtual'; 

export default function HomeScreen() {
    const saldo = 1500.75; 

    return (
        <View style={styles.container}>
            <Text>Bem-vindo à Tela Inicial!</Text>
            <SaldoAtual saldo={saldo} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
