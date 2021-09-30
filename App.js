
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Aluno from "./src/Aluno/Aluno";
import Hello from "./src/Hello/Hello"
import Imagem from "./src/Imagem/Imagem"

export default function App() {
  return (
    <View style={styles.container}>
      <Imagem/>
      <Aluno/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
