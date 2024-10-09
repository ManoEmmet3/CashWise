import React from 'react';
import { View, StyleSheet } from 'react-native';
import SaldoAtual from '../components/SaldoAtual';
import CaixaMovimentacao from '../components/Movimentacao'; 

export default function HomeScreen() {
    const saldo = 97.25; 

    return (
        <View style={styles.container}>

            <View style={styles.saldoContainer}>
                <SaldoAtual saldo={saldo} />
            </View>


            <View style={styles.movimentacaoContainer}>
                <CaixaMovimentacao /> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    saldoContainer: {
        marginTop: 90, 
        alignItems: 'center',
    },
    movimentacaoContainer: {
        marginTop: 50, 
        alignItems: 'center',
        height:17
    },
});
