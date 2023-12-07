import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import StatusBarColor from '../../components/statusBar';
import { Ionicons } from '@expo/vector-icons';
import NotifyItem from '../../components/notifyItem';

export default function Notifications() {
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <View style={[styles.title, { justifyContent: 'center' }]}>
                    <TouchableOpacity>
                        <Ionicons name='notifications' size={34} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Notificações</Text>
                </View>
            </View>
            <ScrollView>
                <View>
                    <NotifyItem Date={'Quinta-Feira 22/03/2023'}
                        Time={'07:00'}
                        Texto={"Cupom: \“MeuSacolao10\”  para 10% de desconto em sua próxima compra. Cupom não cumulativo, apenas um uso por cliente."}
                        Validade={'VÁLIDO ATÉ 30/04/2023 23h59'}
                        />
                    <NotifyItem Date={'Quinta-Feira 12/03/2023'}
                        Time={'06:58'}
                        Texto={"Cupom: \“MeuSacolao10\”  para 10% de desconto em sua próxima compra. Cupom não cumulativo, apenas um uso por cliente."}
                        Validade={'VÁLIDO ATÉ 19/03/2023 23h59'}
                        />
                    <NotifyItem Date={'Quinta-Feira 05/03/2023'}
                        Time={'07:11'}
                        Texto={"Cupom: \“MeuSacolao10\”  para 10% de desconto em sua próxima compra. Cupom não cumulativo, apenas um uso por cliente."}
                        Validade={'VÁLIDO ATÉ 15/03/2023 23h59'}
                        />
                    <NotifyItem Date={'Quinta-Feira 02/02/2023'}
                        Time={'07:00'}
                        Texto={"Cupom: \“MeuSacolao10\”  para 10% de desconto em sua próxima compra. Cupom não cumulativo, apenas um uso por cliente."}
                        Validade={'VÁLIDO ATÉ 12/02/2023 23h59'}
                        />
                </View>
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