import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBarColor from '../../components/statusBar';
import { Ionicons } from '@expo/vector-icons';
import { BandejaItem } from '../../components/bandejaItem'

const dataBandejas = [
    {
        id: '001-BCM',
        title: 'Bandeja de Couve manteiga',
        price: 6.15,
        describle: 'Bandeja com aprox. 260g de Couve manteiga fatiada e higienizada.'
    },
    {
        id: '002-BRL',
        title: 'Bandeja de Repolho Liso',
        price: 6.25,
        describle: 'Bandeja com aprox. 300g de Repolho Liso fatiado e higienizado.'
    },
    {
        id: '003-BAC',
        title: 'Bandeja de Alface-Crespa',
        price: 6.20,
        describle: 'Bandeja com aprox. 220g de Alface-Crespa fatiada e higienizada.'
    },

]

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <View style={styles.title}>
                    <TouchableOpacity>
                        <Ionicons name='menu' size={34} color="white" />
                    </TouchableOpacity>
                    <Image style={styles.logoimgR} source={require('../../assets/m_tomate.png')} />
                    <Text style={styles.titleText}>Meu Sacolão</Text>
                    <TouchableOpacity>
                        <Ionicons name='cart' size={34} color="white" />
                    </TouchableOpacity>
                </View>
                <TextInput style={styles.input} placeholder='Pesquisar' />
                <Ionicons style={{ position: 'absolute', top: 50, right: 70, }} name='search' color="#bcbcbc" size={20} />
            </View>
            <ScrollView scrollEnabled={true}>
                <View style={{ backgroundColor: "#FFFFFF", marginTop: 15, borderRadius: 4, flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity style={[styles.selectionBox, { backgroundColor: '#ffe600' },]}>
                        <Text>Frutas</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={[styles.selectionBox, { backgroundColor: '#00ff1a' },]}>
                        <Text>Legumes</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={[styles.selectionBox, { backgroundColor: '#0386e5' },]}>
                        <Text>Hortaliças</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectionBox, { backgroundColor: '#adff00' },]}>
                        <Text>Verduras</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "#FFFFFF", marginTop: 15, borderRadius: 4, flex: 1, }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#289e10' }}>Prontos para Preparo</Text>
                    <FlatList
                        style={{marginTop: 15, width: "98%", marginLeft: 4,}}
                        data={dataBandejas}
                        renderItem={({ item }) => <BandejaItem data={item} />}
                    />
                </View>
            </ScrollView>
            <StatusBarColor cor="#1F7E0C" />
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
        height: 100,
        alignItems: 'center'
    },
    title: {
        paddingTop: 10,
        flexDirection: 'row',
        alignContent: 'flex-start',
        width: "100%",
    },
    titleText: {
        fontSize: 24,
        color: "#FFF",
        fontWeight: 'bold',
        marginLeft: 80,
        marginRight: 60,
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
    logoimgR: {
        position: 'absolute',
        width: 33,
        height: 35,
        left: 75,
        zIndex: 2,
        bottom: 2,
    },
    selectionBox: {
        width: 140,
        height: 140,
        borderRadius: 10,
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    selectionLineBox: {
        marginLeft: 5,
        marginRight: 5,
    }
})