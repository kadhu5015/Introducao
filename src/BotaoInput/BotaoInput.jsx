import React, {Component} from 'react'
import {View, Text, TextInput, Button} from 'react-native'

export default class BotaoInput extends Component{

    constructor(props){
        super(props)
        this.state = {texto: ''}
    }    
    
    render(){

        const textoescrito = ''        
        return(
            <View style={{padding:10}}>
                <h1>{this.textoescrito}</h1>
                <Text>
                    Entrada de texto com botão
                </Text>
                
                <TextInput
                    onChangeText={(texto)=>{this.setState({texto})}}
                    placeholder="Digite o texto"
                
                />

                <View>
                    <Button
                        title="Pegar texto!"
                        onPress={()=>{textoescrito = this.state.texto}}
                    
                    />
                </View>

            </View>
        )
    }
}

