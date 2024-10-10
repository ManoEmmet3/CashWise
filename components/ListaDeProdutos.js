// components/ListaDeProdutos.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListaDeProdutos = ({ produtos }) => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <Text style={item.valor < 0 ? styles.despesa : styles.adicional}>
                {item.valor < 0 ? `${item.valor}` : `+${item.valor}`}
            </Text>
            <View style={item.valor < 0 ? styles.bolinhaRed : styles.bolinhaGreen} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.dataText}>12.08.22</Text>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 327,
        height: 194,
        gap: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        opacity: 1, // Mudado para 1 para tornar visível
    },
    dataText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    listContainer: {
        paddingBottom: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    itemText: {
        fontSize: 14,
        flex: 1,
    },
    despesa: {
        color: 'red',
    },
    adicional: {
        color: 'green',
    },
    bolinhaRed: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
    },
    bolinhaGreen: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green',
    },
});

export default ListaDeProdutos;
