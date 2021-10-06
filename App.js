
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Atividade1 from "./src/Atividade1/Aluno";
import Atividade2 from './src/Atividade2/Atividade2';
import Exemploproff from './src/Atividade2/FeitapeloProff';
import Estilo01 from './src/Estilos/Estilo01';
import Hello from "./src/Hello/Hello"
import Imagem from "./src/Imagem/Imagem";
import Estudante from './src/props/Estudante';
import EstudanteComFuncao from './src/props/EstudanteComFuncao';
import SomaSubtrai from './src/state/SomaSubtrai';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1/>
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
});
