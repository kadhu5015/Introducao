
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Atividade1 from "./src/Atividade1/Aluno";
import Cabecalho from './src/Atividade2/Cabecalho';
import Imagem2 from './src/Atividade2/Corpo';
import Disciplina from './src/Atividade2/Disciplina';
import Atividade2 from './src/CidadesExemplo/Atividade2';
import Exemploproff from './src/CidadesExemplo/FeitapeloProff';
import Estilo01 from './src/Estilos/Estilo01';
import Hello from "./src/Hello/Hello"
import Imagem from "./src/Imagem/Imagem";
import Estudante from './src/props/Estudante';
import EstudanteComFuncao from './src/props/EstudanteComFuncao';
import SomaSubtrai from './src/state/SomaSubtrai';
import CalculadoraApp from './src/Imc/CalculadoraApp';
import TradutorPizza from './src/pizza/Tradutor';
import BotaoInput from './src/BotaoInput/BotaoInput';
import Tocavel from './src/tocaveis/tocaveis';
import MeuScroll from './src/scroll/MeuScroll';
import IMCApp from './src/Atividade3/IMCApp';

export default function App() {
  return (
    <View style={styles.container}>
      <IMCApp></IMCApp>
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
