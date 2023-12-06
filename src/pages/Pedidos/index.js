import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import StatusBarColor from '../../components/statusBar';
import { Ionicons } from '@expo/vector-icons';


export default function Pedidos() {
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <View style={[styles.title, { justifyContent: 'center' }]}>
                    <Ionicons name='basket' size={34} color="white" />
                    <Text style={styles.titleText}>Pedidos</Text>
                </View>
            </View>
            <View style={styles.pedidos}>
                <Text style={styles.pedidosText}>Você ainda não realizou um pedido</Text>
            </View>
                <Image style={{ position: 'absolute', opacity: 0.35, zIndex: -1, width: 320, height: 400, top: 180, left: 20, }} source={require('../../assets/m_brocolis.png')} />
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
    pedidos: {
        backgroundColor: "rgba(255, 255, 255,0.25)",
        height: '100%',
        alignItems: 'center'
    },
    pedidosText:{
        fontSize: 20,
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#156e03',
        fontWeight: 'bold',
        textShadowColor: '#000'
    }
})