import React from 'react';
import { View, StyleSheet } from 'react-native';
import SaldoAtual from '../components/SaldoAtual';
import CaixaMovimentacao from '../components/Movimentacao';
import ListaDeProdutos from '../components/ListaDeProdutos'; // Importando o novo componente

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
        
            <View style={styles.listaContainer}>
                <ListaDeProdutos />
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
        height: 17,
    },
    listaContainer: {
        marginTop: 20, 
        alignItems: 'center',
        marginTop: 90,
    },
});
