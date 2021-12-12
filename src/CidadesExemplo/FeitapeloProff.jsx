import React, {Component} from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Exemploproff extends Component{

    constructor(props){
        super(props)
        this.state = {Fortaleza:0, Quixada:0,Limoeiro:0,Juazeiro:0}

        this.votarFortaleza = this.votarFortaleza.bind(this) //aqui eu estou dizendo que quando a função for chamada, ela vai levar a referencia do this do escopo que chamaram ela
        this.votarQuixada = this.votarQuixada.bind(this) 
        this.votarLimoeiro = this.votarLimoeiro.bind(this) 
        this.votarJuazeiro = this.votarJuazeiro.bind(this) 

        this.menosVotado = this.cidadesMenosVotadas(this.state) //variavel de instância
    
    }

    cidadesMenosVotadas(cidades){

            let menosVotadas = '' //variavel
            
            let menor = cidades.Fortaleza //Aqui estou dizendo que a variavel "menor" assume o valor "Fortaleza"

            //descobrindo qual é o menor valor

            for (var cidade in cidades){ //cidade vai assumir de um por um os valores do this.state
                if(cidades[cidade]<=menor)
                    menor = cidades[cidade]     
            }
        
            //montando a string

            for(var cidade in cidades){
                if(cidades[cidade]===menor){
                    menosVotadas += ' ' + cidade
                }
            }

            return menosVotadas


    }

    votarFortaleza(){
        this.setState({Fortaleza:this.state.Fortaleza+1},// //o segundo parametro de setState é uma função callback que só é executada quando o primeiro parametro terminar
                        ()=>{this.menosVotado = this.cidadesMenosVotadas(this.state), 
                            this.setState(this.state)})
                             
    }
    votarQuixada(){
        this.setState({Quixada:this.state.Quixada+1},
                        ()=>{this.menosVotado = this.cidadesMenosVotadas(this.state), 
                            this.setState(this.state)})
    }
    votarLimoeiro(){
        this.setState({Limoeiro:this.state.Limoeiro+1},
                        ()=>{this.menosVotado = this.cidadesMenosVotadas(this.state), 
                            this.setState(this.state)})
    }
    votarJuazeiro(){
        this.setState({Juazeiro:this.state.Juazeiro+1},
                        ()=>{this.menosVotado = this.cidadesMenosVotadas(this.state), 
                            this.setState(this.state)})
    }

    render(){ //toda vez que uma variavel de estado é modificada, o react executa o método render automaticamente

        const {Fortaleza,Quixada,Limoeiro,Juazeiro} = this.state 

        return(
            <View style={estilos.container}>

                <View><h1>VOTAÇÃO DE CIDADES</h1></View>
               
                <View style={estilos.cidades}>
                    <Text>Fortaleza: {Fortaleza}</Text>
                    <Text>Quixada: {Quixada}</Text>
                    <Text>Limoeiro: {Limoeiro}</Text>
                    <Text>Juazeiro: {Juazeiro}</Text>
                </View>

                <View><Text>Menos votadas: {this.menosVotado}</Text></View>
                <View style={estilos.botoes}>
                    <Button title='Fortaleza' onPress={this.votarFortaleza} ></Button>
                    <Button title='Quixadá' onPress={this.votarQuixada}></Button>
                    <Button title='Limoeiro' onPress={this.votarLimoeiro}></Button>
                    <Button title='Juazeiro' onPress={this.votarJuazeiro}></Button>

                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
    },
    titulo: {
        fontFamily:'Arial',
        alignSelf:'center'
    },
    cidades: {
        fontWeight: 'bold',
        margin: 10

    },
    botoes: {
        
        flexDirection: 'row',
        justifyContent: 'space-around'
       
    }
});