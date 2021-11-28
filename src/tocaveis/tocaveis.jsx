import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native"

export default class Tocavel extends Component{

    apertouBotao(){
        alert("Você apertou o botão!")
    }
    pressionouBotao(){
        alert("Você pressionou o botão!")
    }

    render(){
        return(
            <View style={estilo.container}>

                <TouchableHighlight underlayColor='black'onPress={this.apertouBotao}>
                    <View style={estilo.button}>
                        <Text style={estilo.buttonText}>Pressione aqui</Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity underlayColor='black' onPress={this.apertouBotao}>
                    <View style={estilo.button}>
                        <Text style={estilo.buttonText}>Pressione aqui</Text>
                    </View>
                </TouchableOpacity>

                <TouchableHighlight underlayColor='black'onPress={this.apertouBotao} onLongPress={this.pressionouBotao}>
                    <View style={estilo.button}>
                        <Text style={estilo.buttonText}>Pressione aqui</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container:{
        paddingTop: 60,
        alignItems: 'center'
    },
    button:{
        marginBottom: 3,
        width:260,
        alignItems:'center',
        backgroundColor: '#2196f3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});