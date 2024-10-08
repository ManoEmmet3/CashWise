
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CaixaMovimentacao() {
    return (
        <View style={styles.container}> 
            <View style={styles.caixa}>
                <Text style={styles.titulo}>Movimentação</Text>
                <TouchableOpacity style={styles.botao}>
                    <Icon name="plus" size={16} color="#FFFFFF" style={styles.icone} /> 
                    <Text style={styles.botaoTexto}>Movimentação</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    caixa: {
        width: 327,
        padding: 16,
        paddingTop: 24,
        backgroundColor: '#ffff',
        borderRadius: 10,
        marginVertical: 8,
        alignItems: 'center',
    },
    titulo: {
        fontFamily: 'Nunito Sans',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20.8,
        textAlign: 'left',
        width: '100%',
    },
    botao: {
        width: 327,
        height: 50,
        backgroundColor: '#333638',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        flexDirection: 'row',
    },
    botaoTexto: {
        fontFamily: 'Nunito Sans',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 18.2,
        textAlign: 'left',
        color: '#FFFFFF',
        marginLeft: 8,
    },
    icone: {
        marginRight: 8,
        fontSize: 11,
    },
});
