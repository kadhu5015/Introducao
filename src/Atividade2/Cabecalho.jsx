import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Estudante extends Component{
    render(){
        return (
            <View>
                <Text>Nome: {this.props.nome}</Text>
                <Text>Curso: {this.props.curso} </Text>
            </View>
        )
    }
}