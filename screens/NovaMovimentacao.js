import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NovaMovimentacao() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Esta é a nova tela de Movimentação</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
