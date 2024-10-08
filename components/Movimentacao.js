import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação

export default function CaixaMovimentacao() {
    const navigation = useNavigation(); // Obtém o objeto de navegação

    return (
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Text style={styles.titulo}>Movimentação</Text>
                {/* Botão clicável que redireciona para a tela NovaMovimentacao */}
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('NovaMovimentacao')}>
                    <Icon name="plus" size={16} color="#FFFFFF" /> 
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
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 18.2,
        textAlign: 'left',
        color: '#FFFFFF',
        marginLeft: 8,
    },
});
