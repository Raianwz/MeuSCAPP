import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';


export default function NotifyItem({Date, Time, Texto, Validade}){
    Validade = '' || Validade
    return(
        <View style={style.container}>
            <View style={style.timeBox}>
                <MaterialIcons name="schedule" size={15}/>
                <Text style={style.timeBoxTxt}>Enviada {Date} às {Time}</Text>
            </View>
            <Text>{Texto}</Text>
            <Text style={style.txtValidade}>{Validade}</Text>
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
        padding: 8,
    },
    timeBox:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    timeBoxTxt:{
        marginLeft: 5,
        fontSize: 12,
    },
    txtValidade:{
        fontWeight: 'bold'
    }
})