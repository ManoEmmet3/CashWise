import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, ScrollView } from 'react-native';
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
            <ScrollView contentContainerStyle={styles.secondBox}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Descrição</Text>
                    <TextInput
                        style={styles.input}
                        value={descricao}
                        onChangeText={setDescricao}
                    />

                    <View style={styles.row}>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>Data </Text>
                            <TextInput
                                style={styles.input}
                                value={data}
                                onChangeText={setData}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>Hora </Text>
                            <TextInput
                                style={styles.input}
                                value={hora}
                                onChangeText={setHora}
                            />
                        </View>
                    </View>

                    <Text style={styles.label}>Valor</Text>
                    <TextInput
                        style={styles.input}
                        value={valor}
                        onChangeText={setValor}
                        keyboardType="numeric" // Para aceitar apenas números
                    />

                    <Text style={styles.label}>Tipo</Text>
                    <Picker
                        selectedValue={tipo}
                        style={styles.picker}
                        onValueChange={(itemValue) => setTipo(itemValue)}
                    >
                        <Picker.Item label="Receita" value="receita" />
                        <Picker.Item label="Despesa" value="despesa" />
                    </Picker>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20, // Para dar espaço interno na caixa
    },
    inputContainer: {
        width: 327, // Largura fixa
        height: 'auto', // Altura automática
        marginTop: 40,
        marginLeft: 24,
        gap: 24, // Espaçamento entre os inputs
        opacity: 1, // Mantendo opacidade visível
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15, // Espaço entre a linha de inputs e o próximo campo
    },
    inputWrapper: {
        flex: 1, // Faz os inputs ocuparem a mesma proporção
        marginRight: 12, // Espaço entre Data e Hora
    },
    inputWrapperLast: {
        marginRight: 0, // Para o último item não ter margem direita
    },
    label: {
        width: '100%', // Para garantir que ocupe toda a largura
        marginBottom: 5, // Espaço entre o label e o input
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        height: 48, // Altura definida como solicitado
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6, // Raio do borda conforme solicitado
        width: '100%', // 100% da largura
        marginBottom: 15,
        paddingHorizontal: 14, // Padding conforme solicitado
    },
    picker: {
        height: 40,
        width: '100%',
        marginBottom: 15,
    },
});
