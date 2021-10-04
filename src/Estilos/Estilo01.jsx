import React, {Component} from 'react';
import { View} from 'react-native';

export default class Estilo01 extends Component{
    render(){
        return(
            <View style={
                {
                    flex:1, //ocupa a tela toda
                    flexDirection:'column', //diz qual é o eixo principal, por padrão é column
                    justifyContent: 'center', //organiza no eixo principal
                    alignItems: 'center', //organiza no eixo secundário

                }

            }>
                <View style={{width:50, height:50,backgroundColor:'red'}}></View>
                <View style={{width:50,height:50,backgroundColor:'green'}}></View>
                <View style={{width:50,height:50,backgroundColor:'blue'}}></View>

            </View>
        )
    }
}