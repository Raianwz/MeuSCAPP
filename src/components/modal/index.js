import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native'

export function ModalForgotPassword({ handleClose }) {
    async function handleSendMail(){
        handleClose()
        Alert.alert('Aviso',"O E-mail de recuperação de senha foi enviado!")
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Esqueci minha senha</Text>
                <View>
                    <Text style={styles.mailtext}>E-mail</Text>
                    <TextInput style={styles.input}
                        placeholder="Digte seu E-mail"
                        keyboardType="email-address" />
                    <Text style={{ textAlign: 'center', paddingTop: 10, fontWeight: 'bold' }}>Informe o e-mail cadastrado.</Text>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={() => { handleSendMail() }}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={() => { handleClose() }}>
                        <Text style={styles.buttonCancelText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.8)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: '#FFF',
        width: "95%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        color: '#1F7E0C',
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 12,
    },
    mailtext: {
        textAlign: 'left',
        paddingLeft: 4,
        fontWeight: 'bold',
        fontSize: 13,
    },
    input: {
        width: 260,
        height: 40,
        borderWidth: 1.1,
        padding: 3,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
        backgroundColor: "#1F7E0C",
        borderWidth: 2,
        borderRadius: 50,
        width: '80%',
        borderColor: 'rgba(42, 254, 0, 0.6)',
    },
    buttonArea: {
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 12,
    },
    buttonText: {
        color: "#FFF",
        fontWeight: 'bold',
    },
    buttonCancelText: {
        color: "#FF0000",
        fontWeight: 'bold',
    },
    buttonCancel: {
        backgroundColor: "#FFF",
        borderColor: "#FF0000",
    }
})