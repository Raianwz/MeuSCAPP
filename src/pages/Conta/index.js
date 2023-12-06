import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import StatusBarColor from '../../components/statusBar';
import { Ionicons } from '@expo/vector-icons';
import CaixaEditar from '../../components/caixaEditar';


export default function Conta() {
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <View style={[styles.title, { justifyContent: 'center' }]}>
                    <TouchableOpacity>
                        <Ionicons name='person-circle' size={34} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Minha Conta</Text>
                </View>
            </View>
            <ScrollView style={{backgroundColor: "#FFF"}}>
                <CaixaEditar title='Nome Completo' describle="Tester" />
                <CaixaEditar title='Celular' describle="(11) 9 0000-0000" />
                <CaixaEditar title='CEP' describle="00000-000" />
                <CaixaEditar title='Email' describle="Tester@Tester" />
                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 16, marginLeft: 10}} >Alterar Senha</Text>
                <CaixaEditar title='Senha Alta' describle="Tester" secure={true} />
                <CaixaEditar title='Nova Senha' describle="Nova Senha" secure={true} />
                <CaixaEditar title='Confirmar Nova Senha' describle="Confirmar Nova Senha" secure={true} />
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
    cforms: {
        flex: 2,
        textAlign: 'left',
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cformsText: {
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        fontSize: 16,
    },
})