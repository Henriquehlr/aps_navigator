import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja Bem Vindo</Text>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 25}}>
      <Button
        title="Logar"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
       <Button
        title="Cadastrar"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
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