// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SaldoAtual from '../components/SaldoAtual'; 

export default function HomeScreen() {
    const saldo = 97.25; 

    return (
        <View style={styles.container}>
            <SaldoAtual saldo={saldo} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
        paddingTop: 40, 
    },
});
