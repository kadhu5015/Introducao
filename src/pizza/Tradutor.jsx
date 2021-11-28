import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'

export default class TradutorPizza extends Component{

    constructor(props){
        super(props)
        this.state = {frase: ''}
    }

    render(){
        return(
            <View style={{padding:10}}>
                <TextInput
                    style={{height:40}}
                    placeholder='Digite a frase'
                    onChangeText={
                        (frase)=>{
                            this.setState({frase})
                        }
                    }
                />
                <Text style={{padding:10,fontSize:22}}>
                    Tradução: {this.state.frase.split(' ').map( //map vai pegar o que tem dentro dela e aplicar em cada elemento da array
                        (palavra)=>palavra && '🍕'//simplificação do teste do if: se tiver alguma palavra entao imprime
                    ).join(' ')//o join junta tudo numa array
                    }
                </Text>

            </View>
        )
    }
}