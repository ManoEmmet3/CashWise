import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; // Importando do novo pacote

export default function NovaMovimentacao() {
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('receita'); // Inicializando com 'receita'

    const handleBack = () => {
        console.log("Voltando para a Home");
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#DDDEDF" barStyle="dark-content" />
            <View style={styles.firstBox}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.hora}>Nova Movimentação</Text>
            </View>
            <View style={styles.secondBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Data (DD/MM/AAAA)"
                    value={data}
                    onChangeText={setData}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Hora (HH:MM)"
                    value={hora}
                    onChangeText={setHora}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    value={valor}
                    onChangeText={setValor}
                    keyboardType="numeric" // Para aceitar apenas números
                />
                <Picker
                    selectedValue={tipo}
                    style={styles.picker}
                    onValueChange={(itemValue) => setTipo(itemValue)}
                >
                    <Picker.Item label="Receita" value="receita" />
                    <Picker.Item label="Despesa" value="despesa" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#DDDEDF',
    },
    firstBox: {
        width: '100%',
        height: 115,
        backgroundColor: '#DDDEDF',
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 10,
    },
    hora: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 23.4,
        textAlign: 'center',
        flex: 1,
    },
    secondBox: {
        width: '100%',
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, // Para dar espaço interno na caixa
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    picker: {
        height: 40,
        width: '100%',
        marginBottom: 15,
    },
});
