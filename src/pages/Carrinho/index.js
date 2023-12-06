import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import StatusBarColor from '../../components/statusBar';
import { Ionicons } from '@expo/vector-icons';
import CarrinhoItem from '../../components/carrinhoItem';


export default function Carrinho() {
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <View style={[styles.title,{justifyContent: 'center'}]}>
                    <TouchableOpacity>
                        <Ionicons name='cart' size={34} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Carrinho</Text>
                </View>
            </View>
            <ScrollView>
                <Text>Tela do Carrinho</Text>
                <CarrinhoItem name='Laranja Perâ' price={4.6} />
            </ScrollView>
            <StatusBarColor />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dfdfdf"
    },
    titleBox: {
        marginTop: 20,
        backgroundColor: '#156e03',
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    title: {
        paddingTop: 10,
        flexDirection: 'row',
        width: "100%",
    },
    titleText: {
        fontSize: 24,
        color: "#FFF",
        fontWeight: 'bold',
        marginLeft: 10,
    }, input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        padding: 3,
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: '#FFF'
    },
})