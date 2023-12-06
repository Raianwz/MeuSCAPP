import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function CarrinhoItem({ name, price }) {
    const [qtd, setQtd] = useState(1)
    const addQtd = () => { setQtd(qtd + 1) }
    const rmQtd = () => { if (qtd >= 0) { setQtd(qtd - 1) } if (qtd <= 0) { setQtd(0) } }

    price = Number(price).toFixed(2) || 0
    return (
        <View style={style.container}>
            <View style={style.itemBox}>
                <Text>{name}</Text>
                <Text>R$ {price}</Text>
            </View>
            <View style={style.qtdBox}>
                <Text>Quantidade</Text>
                <TouchableOpacity style={style.btn} onPress={() => addQtd()}>
                    <Ionicons name="add" size={20} />
                </ TouchableOpacity>
                <Text>{qtd}</Text>
                <TouchableOpacity style={style.btn} onPress={() => rmQtd()}>
                    <Ionicons name="remove" size={20} />
                </ TouchableOpacity>
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 10,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: "#FFF"
    },
    title: {
        fontWeight: 'bold',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    textBox: {
        flex: 3,
    },
    priceBox: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    },
    shopBox: {
        marginRight: -14,
        marginTop: -15,
        marginBottom: -15,
        paddingLeft: 5,
        backgroundColor: '#fe7a00',
        justifyContent: 'center',
        width: 50,
        height: "auto",
        borderTopEndRadius: 8,
        borderBottomRightRadius: 8,
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'justify',
        color: 'black',
        width: 208,
    },
    itemBox: {
        flex: 1,
        marginLeft: 20,
    },
    qtdBox: {
        flex: 2,
        flexDirection: 'row',
        marginLeft: 80,
    },
    btn: {
        marginHorizontal: 6,
    }
})