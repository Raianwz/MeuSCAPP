import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import StatusBarColor from '../../components/statusBar';
import { Ionicons } from '@expo/vector-icons';
import CarrinhoItem from '../../components/carrinhoItem';


export default function Carrinho() {
    const [item1, setItem1] = useState(0)
    const [item2, setItem2] = useState(0)
    const [item3, setItem3] = useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <View style={[styles.title, { justifyContent: 'center' }]}>
                    <TouchableOpacity>
                        <Ionicons name='cart' size={34} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Carrinho</Text>
                </View>
            </View>
            <ScrollView>
                <CarrinhoItem name='Laranja Perâ' price={4.6} onChangeValue={(e)=> console.log(e.target)} />
                <CarrinhoItem name='Bandeja de Couve Manteiga' price={6.15} />
                <CarrinhoItem name='Suco Natural de Manga' price={7} />
                <View style={styles.cupomBox}>
                    <Text style={styles.cupomBoxText}>Cupom:</Text>
                    <TextInput style={styles.input} placeholder='Digite o código do cupom' />
                </View>
                <View>
                    <View style={styles.compraBox}>
                        <View style={{ flexDirection: 'row', marginLeft: 20, }}>
                            <Text style={styles.txtCompra}>SubTotal:</Text>
                            <Text style={{ marginLeft: 200, }}>R$ 17,75</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 20, }}>
                            <Text style={styles.txtCompra}>Taxa de Entrega:</Text>
                            <Text style={{ marginLeft: 155, }}>R$ 3,00</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 20, }}>

                            <Text style={styles.txtCompra}>Cupom de Desconto:</Text>
                            <Text style={{ marginLeft: 128, color: 'red' }}>R$ -2,06</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 20, }}>
                            <Text style={styles.txtCompra}>TOTAL:</Text>
                            <Text style={[{ marginLeft: 211, }, styles.txtCompra]}>R$ 18,69</Text>
                        </View>
                        <View style={[styles.compraBox, { borderColor: "#156e03", borderTopWidth: 1.2, borderBottomWidth: 1.2 }]}>
                            <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                                <Text style={[styles.txtCompra, { marginRight: 10, }]}>Endereço:</Text>
                                <Text style={{ color: '#dfdfdf', width: '50%' }} textBreakStrategy='highQuality' numberOfLines={4}>R. das Hachuradas, 75, 0000-000, São Paulo - SP.</Text>
                                <TouchableOpacity style={[styles.btnVerificar, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <Text style={styles.btnVerificarTxt}>Verificar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.compraBox, { borderColor: "#156e03", borderBottomWidth: 1.2, alignItems: 'baseline' }]}>
                            <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                                <Text>Tipo de Entrega:</Text>
                                <TouchableOpacity style={[styles.btnVerificar, { justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderColor: "#c4c4c4" }]}>
                                    <Text style={[styles.btnVerificarTxt, { color: "#c4c4c4" }]}>Expressa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnVerificar, { justifyContent: 'center', alignItems: 'center', marginLeft: 10 }]}>
                                    <Text style={styles.btnVerificarTxt}>Agendada</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.compraBox, { borderColor: "#156e03", justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}]}>
                            <View style={{ flexDirection: 'row', marginLeft: 10, }}>
                                <Text>Método de Pagamento:</Text>
                                <TouchableOpacity style={[styles.btnVerificar, { justifyContent: 'center', alignItems: 'center', marginLeft: 10 }]}>
                                    <Text style={styles.btnVerificarTxt}>Selecione</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btnEfetuar}>
                                    <Text style={styles.btnEfetuarTxt}>Efetuar Compra</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
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
    cupomBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#289e10',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    cupomBoxText: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    },
    input: {
        width: 240,
        height: 40,
        padding: 3,
        paddingLeft: 30,
        fontSize: 14,
        paddingRight: 30,
        backgroundColor: '#FFF'
    },
    txtCompra: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    compraBox: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 10,
    },
    btnVerificar: {
        borderColor: "#1f7e0c",
        borderWidth: 2,
        borderRadius: 8,
        textAlign: 'center',
        width: 90,
        height: 35,
    },
    btnVerificarTxt: {
        color: '#1f7e0c'
    },
    btnEfetuar: {
        marginTop: 30,
        backgroundColor: "#289e10",
        height: 50,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    btnEfetuarTxt: {
        color: "#FFF",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    }
})