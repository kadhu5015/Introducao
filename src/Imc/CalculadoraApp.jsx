import React, {Component} from 'react'
import {View, TextInput} from 'react-native'

import Calculadora from './Calculadora'

export default class CalculadoraApp extends Component{
    //construtor serve pra criar estado
    constructor(props){
        super(props)
        this.state = {peso:null,altura:null}
    }

    render(){
        return(
            <View>
                <h1>Peso: {this.state.peso}</h1>
                <h1>Altura: {this.state.altura}</h1>

                <TextInput
                    style={{height:40}}
                    placeholder= 'Digite o peso'//diz o que é pra ser digitado
                    onChangeText={ //toda vez que o input modificar, vai entrar no código javascript que a gente bota dentro
                        (peso)=>{ //o "meuPeso" vai ter o valor do que eu tô digitando no meu input
                            this.setState({peso}) //se o nome que eu botei na variavel da arrow for igual ao nome da variavel no state, eu não preciso fazer "peso:peso", o javascript vai entender
                        }
                    }

                />
                 <TextInput
                    style={{height:40}}
                    placeholder= 'Digite a altura'//diz o que é pra ser digitado
                    onChangeText={ 
                        (minhaAltura)=>{ 
                            this.setState({altura:minhaAltura})
                        }
                    }

                />
                <Calculadora
                    peso={this.state.peso}
                    altura={this.state.altura}
                />
            </View>
        )
    }
}

