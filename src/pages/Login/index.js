import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import { ModalForgotPassword } from '../../components/modal'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
export default function Login() {
  const [modalVisible, setModalVisisable] = useState(false)
  const navegation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="fadeInUp"
        delay={600}
        source={require('../../assets/login_logo_verde.png')}
        style={styles.logo}
      />
      <Animatable.Text style={styles.welcome} animation="fadeInUp" delay={600}>Bem-Vindo(a)!</Animatable.Text>
      <View>
        <Text style={styles.loginText}> Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digte seu E-mail"
          keyboardType="email-address"
        />
        <Text style={[styles.loginText, styles.auxmargintop]}> Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digte seu Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => setModalVisisable(true)}>
          <Text style={styles.forgotpassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonCadastro]} onPress={() => navegation.navigate('Cadastro')}>
          <Text style={[styles.buttonText, styles.buttonTextCadastro]}>Cadastre-se</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <ModalForgotPassword handleClose={() => setModalVisisable(false)} />
        </Modal>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 260,
    height: 148,
  },
  welcome: {
    color: '#1F7E0C',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginText: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontSize: 16,
  },
  auxmargintop: {
    marginTop: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1.1,
    padding: 3,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 14,
  },
  forgotpassword: {
    marginTop: 12,
    color: '#1F7E0C',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  button: {
    backgroundColor: "#289E10",
    width: 250,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
    borderRadius: 15,
    marginBottom: 18,
  },
  buttonCadastro: {
    backgroundColor: '#FFF',
    borderColor: '#1F7E0C',
    borderWidth: 2,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextCadastro: {
    color: '#1F7E0C',
  }
});
