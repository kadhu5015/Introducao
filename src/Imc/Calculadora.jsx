import React, {Component} from 'react'
import {Text} from 'react-native'

export default class Calculadora extends Component{
    //o código javaScript tem um objeto json, por isso o {{}} no style
    
    render(){
        const {peso,altura} = this.props
        
        if(!peso  || !altura) return null //Se não tiver isso, o IMC fica igual a "NaN"
        const imc = peso/(altura*altura)
        return(
            <Text style={{padding:10,fontSize: 20}}>
                IMC: {imc}
            </Text>
        )
    }
}