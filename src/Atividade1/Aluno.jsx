import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from 'react-native'

export default function Atividade1(){
    return(
       // <View style={{flex: 1},{backgroundColor:'red'}}>
       <View>
            <Text style={estilos.textColor}>Irmão do Jorel</Text>
            <Text>18 anos</Text>
            <Text>Quixadá</Text>
            <Text>Design Digital</Text>

        </View>
    )
}

const estilos = StyleSheet.create( //estilos é um objeto
    {//essa função recebe esse objeto JSON
        textColor:{
            color: 'green',
        }
    }


)