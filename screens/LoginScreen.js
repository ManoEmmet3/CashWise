import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import splash from '../assets/splash.png';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image
                source={splash}
                style={styles.image}
            />
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // Centraliza horizontalmente
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: 340,
        height: 140,
        marginBottom: 32, // Espaçamento abaixo da imagem
    },
    input: {
        width: '100%',      // Largura total do input
        height: 52,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
        borderRadius: 5, // Bordas arredondadas para os inputs
    },
    button: {
        width: '100%',     // Largura total do botão
        height: 52,        // Altura igual aos inputs
        backgroundColor: '#000', // Cor de fundo do botão
        justifyContent: 'center', // Centraliza o texto verticalmente
        alignItems: 'center',     // Centraliza o texto horizontalmente
        borderRadius: 5, // Bordas arredondadas para o botão
    },
    buttonText: {
        color: '#fff', // Cor do texto do botão
        fontSize: 16,  // Tamanho da fonte
        fontWeight: 'bold', // Estilo em negrito
    },
});

export default LoginScreen;


