import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Dados da Empresa</Text>
    <View style={styles.modalDados}>
      <Text style={styles.text2}>Telefone: (34)99968-9864</Text>
      <Text style={styles.text2}>Endereço: Avenida B</Text>
      <Text style={styles.text2}>Email: Lereia@gmail.com</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffff1'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f2a365'
  }
})