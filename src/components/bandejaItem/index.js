import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function BandejaItem({ data }) {
    return (
        <Pressable style={style.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={style.textBox}>
                    <Text style={style.title}>{data.title}</Text>
                    <Text numberOfLines={3} style={style.paragraph}>{data.describle}</Text>
                </View>
                <View style={style.priceBox}>
                    <Text style={style.price}>{'R$ ' + data.price.toFixed(2)}</Text>
                    <Text style={{ fontSize: 11, }}>Por unidade</Text>
                </View>
                <TouchableOpacity style={style.shopBox}>
                    <MaterialIcons color='#FFF' name='add-shopping-cart' size={40} />
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#adff00",
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
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
        flex: 2,
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
})