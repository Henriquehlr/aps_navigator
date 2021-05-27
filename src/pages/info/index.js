import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

export default function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dados da Empresa</Text>
      <View style={styles.modalDados}>
        <Text style={styles.text2}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
Nos países de língua inglesa o texto apresenta-se em forma um pouco diferente, apresentada a seguir:

"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
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
    fontSize: 22,
    color: '#ff002b',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#34c0eb',
  },
  modalDados: {
  justifyContent: 'space-between',
  top: 15
  
  }
})