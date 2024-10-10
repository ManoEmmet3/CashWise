import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';  
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NovaMovimentacao() {
    const navigation = useNavigation(); 
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('receita'); 
    const [movimentacoes, setMovimentacoes] = useState([]);

    useEffect(() => {
        const carregarMovimentacoes = async () => {
            try {
                const dados = await AsyncStorage.getItem('movimentacoes');
                if (dados) {
                    setMovimentacoes(JSON.parse(dados));
                }
            } catch (error) {
                console.error("Erro ao carregar movimentações", error);
            }
        };
        carregarMovimentacoes();
    }, []);

    const handleBack = () => {
        navigation.goBack();  
    };

    const handleCadastrar = async () => {
        const novaMovimentacao = { descricao, data, hora, valor, tipo };
        const novasMovimentacoes = [...movimentacoes, novaMovimentacao];
        setMovimentacoes(novasMovimentacoes);
        
        // Salvar movimentações no AsyncStorage
        try {
            await AsyncStorage.setItem('movimentacoes', JSON.stringify(novasMovimentacoes));
            console.log("Movimentação cadastrada!", novaMovimentacao);
            // Limpar os campos após o cadastro
            setDescricao('');
            setData('');
            setHora('');
            setValor('');
            setTipo('receita');
        } catch (error) {
            console.error("Erro ao salvar movimentações", error);
        }
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
                        <View style={[styles.inputWrapper, styles.spacing]}>
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
                        keyboardType="numeric"
                    />

                    <Text style={styles.label}>Selecione</Text>
                    <View style={styles.tipoContainer}>
                        <TouchableOpacity
                            style={[styles.tipoButton, tipo === 'receita' && styles.selectedButton]}
                            onPress={() => setTipo('receita')}
                        >
                            <View style={styles.tipoContent}>
                                <View style={[styles.bolinha, { backgroundColor: 'green' }]} />
                                <Text style={styles.tipoText}>Receita</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tipoButton, tipo === 'despesa' && styles.selectedButton]}
                            onPress={() => setTipo('despesa')}
                        >
                            <View style={styles.tipoContent}>
                                <View style={[styles.bolinha, { backgroundColor: 'red' }]} />
                                <Text style={styles.tipoText}>Despesa</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.cadastrarButton} onPress={handleCadastrar}>
                    <Text style={styles.cadastrarText}>Cadastrar</Text>
                </TouchableOpacity>
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
        padding: 20,
    },
    inputContainer: {
        width: 327,
        height: 'auto',
        marginTop: 40,
        marginLeft: 24,
        gap: 24,
        opacity: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputWrapper: {
        flex: 1,
    },
    spacing: {
        marginRight: 12, 
    },
    label: {
        width: '100%',
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 14,
    },
    tipoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    tipoButton: {
        flex: 1,
        backgroundColor: '#EFF0F0',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        marginRight: 10,
    },
    tipoContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bolinha: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 8,
    },
    tipoText: {
        fontSize: 14,
        fontWeight: '600',
    },
    cadastrarButton: {
        width: 327,
        height: 50,
        backgroundColor: '#333638',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 60,
    },
    cadastrarText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
