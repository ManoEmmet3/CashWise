
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SaldoAtual from '../components/SaldoAtual';
import CaixaMovimentacao from '../components/Movimentacao'; 

export default function HomeScreen() {
    const saldo = 97.25; 

    return (
        <View style={styles.container}>
            <SaldoAtual saldo={saldo} />
            <CaixaMovimentacao /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
        paddingTop: 20, 
        backgroundColor: '#ffff'
    },
});
