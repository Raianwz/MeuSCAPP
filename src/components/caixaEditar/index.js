import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';



export default function CaixaEditar({ title, describle, keyboard, secure }) {
    const [editavel, setEditavel] = useState(false)
    keyboard = 'default' || keyboard
    secure = false || secure

    function checkEditable() {
        if (editavel == false) {
            setEditavel(true)
        } else {
            setEditavel(false)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.cforms}>
                <Text style={[styles.cformsText]}>{title}</Text>
            </View>
            <TextInput
                style={styles.input}
                secureTextEntry={secure}
                keyboardType={keyboard}
                placeholder={describle}
                editable={editavel}
            />
            <TouchableOpacity style={styles.edit} onPress={() => checkEditable()}>
                <MaterialIcons name='edit' size={30} color='grey' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 24,
        alignContent: 'flex-start',
        width: "100%",
        maxHeight: 36,
        backgroundColor: '#289E10',
    },
    titleText: {
        fontSize: 24,
        color: "#FFF",
        fontWeight: 'bold',
        marginLeft: 80,
    },
    input: {
        width: 310,
        height: 40,
        borderWidth: 1.1,
        padding: 3,
        borderRadius: 8,
        paddingLeft: 30,
        fontSize: 14,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: 50,
    },
    edit: {
        position: 'absolute',
        zIndex: 3,
        right: 30,
        bottom: 2,
        height: 36,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cforms: {
        flex: 1,
        textAlign: 'left',
        marginTop: 15,
        marginLeft: 40,
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

