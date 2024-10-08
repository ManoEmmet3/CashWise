import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Inicial</Text>
            {/* Botão que navega para a tela NovaMovimentacao */}
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('NovaMovimentacao')}
            >
                <Icon name="plus" size={16} color="#FFFFFF" />
                <Text style={styles.botaoTexto}>Nova Movimentação</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    botao: {
        width: 327,
        height: 50,
        backgroundColor: '#333638',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 16,
    },
    botaoTexto: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 8,
    },
});
