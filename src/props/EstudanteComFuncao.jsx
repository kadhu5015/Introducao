import React from "react";
import {View, Text} from 'react-native';

export default (props)=>{ //a  função arrow tem que receber props

    return (
        <View>
            <Text>Estudante com funcao</Text>
            <Text>Nome:<strong>{props.nome}</strong></Text>
            <Text>Curso:{props.curso} </Text>
            <Text>IRA: {props.ira}</Text>
        </View>
    )

}