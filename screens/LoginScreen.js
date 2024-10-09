import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text, Alert } from 'react-native';
import splash from '../assets/splash.png';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            navigation.navigate('Home');
        } else {
            Alert.alert('Erro', 'Usuário ou senha incorretos.');
        }
    };

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
                onPress={handleLogin}
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
        alignItems: 'center', 
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: 340,
        height: 140,
        marginBottom: 32, 
    },
    input: {
        width: '100%',      
        height: 52,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
        borderRadius: 5, 
    },
    button: {
        width: '100%',     
        height: 52,        
        backgroundColor: '#000', 
        justifyContent: 'center', 
        alignItems: 'center',     
        borderRadius: 5, 
    },
    buttonText: {
        color: '#fff', 
        fontSize: 16,  
        fontWeight: 'bold', 
    },
});

export default LoginScreen;



