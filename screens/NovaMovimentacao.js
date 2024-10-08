import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NovaMovimentacao() {
    const handleBack = () => {
        console.log("Voltando para a Home");
    };

    return (
        <View style={styles.container}>
            <View style={styles.firstBox}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.hora}>Nova Movimentação</Text>
            </View>
            <View style={styles.secondBox}>
                <Text>Conteúdo da segunda caixa</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    firstBox: {
        width: '100%',
        height: 132,
        backgroundColor: '#DDDEDF',
        padding: 20,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 10,
    },
    hora: {
        fontFamily: 'Nunito Sans', // Define a fonte
        fontWeight: '700', // Peso da fonte
        fontSize: 18, // Tamanho da fonte
        lineHeight: 23.4, // Altura da linha
        textAlign: 'center', // Alinhamento do texto
        flex: 1,
    },
    secondBox: {
        width: '100%',
        height: 132,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
