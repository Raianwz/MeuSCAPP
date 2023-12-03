import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import StatusBarColor from '../../components/statusBar';
import CheckBox from 'expo-checkbox';

export default function Cadastro() {
  const navegation = useNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navegation.navigate('Login')}>
          <Ionicons name='arrow-back' size={34} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Cadastro</Text>
      </View>
      <View style={styles.cforms}>
        <Text style={styles.cformsText}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Maria da Silva"
          keyboardType='default'
        />
        <Text style={styles.cformsText}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Praça da Sé, 105"
          keyboardType='default'
        />
        <Text style={styles.cformsText}>Celular</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 11 9 9999-9999"
          keyboardType='decimal-pad'
          maxLength={14}
        />
        <Text style={styles.cformsText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: mariasilva96@gmail.com"
          keyboardType='email-address'
        />
        <Text style={styles.cformsText}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          keyboardType='default'
          placeholder="Digite sua senha"
        />
        <Text style={styles.cformsText}>Confirme a Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          keyboardType='default'
          placeholder="Digite sua senha novamente"
        />
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          <CheckBox
            style={{ marginLeft: 20, marginRight: 5 }}
            disabled={false}
            value={checked}
            onValueChange={(value) => setChecked(value)}
            boxType='square'
          />
          <Text>Concordo com os </Text>
          <Text style={{ color: "blue" }}>Termos de Uso</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: "center" }}>
          <Text> e a </Text>
          <Text style={{ color: "blue" }}>Política de Privacidade</Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.button,{marginLeft: 30}]}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      <StatusBarColor />
    </ScrollView>
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
  button: {
    backgroundColor: "#289E10",
    width: 300,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
    marginTop: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})