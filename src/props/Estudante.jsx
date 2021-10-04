import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Estudante extends Component{
    render(){
        return (
            <View>
                <Text>Nome:<strong>{this.props.nome}</strong></Text>
                <Text>Curso:{this.props.curso} </Text>
                <Text>IRA: {this.props.ira}</Text>
            </View>
        )
    }
}