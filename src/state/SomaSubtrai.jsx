import React, {Component} from "react";
import {View, Button} from 'react-native';

export default class SomaSubtrai extends Component{

    constructor(props){
        super(props)
        this.state = {valor:0}
        //this.subtracao = this.subtracao.bind(this) //se o subtracao sai fora do escopo de SomaSubtrai, ao menos ele leva a referencia do this
    }
/*
    subtracao(){
        //alert('APERTEI SUBTRAÇÃO');
        this.setState( { valor : this.state.valor - 1 } )
    }
*/
    render(){
        return(
            <View>
                <h1>Valor:{this.state.valor}</h1>
                <Button
                    title='SOMA' //propriedade que dá nome ao botão
                    onPress= {
                        ()=>{
                            //alert('Apertei soma'); //esse alert mostra aquele popup
                            this.setState({valor : this.state.valor + 1})
                        }
                    }
                />
                <br/>
                <Button
                    title='SUBTRAIR'
                    //onPress= {this.subtracao} //se eu botar this.subtracao(), eu estou pegando a execução da funcao
                    onPress= {
                        ()=>{
                            this.setState({valor : this.state.valor - 1})
                        }
                    }
                />
            </View>
        )

    }
}