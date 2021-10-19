import React, {Component} from "react";
import {View, Text, Button} from 'react-native';

export default class Atividade2 extends Component{

    

    constructor(props){
        super(props)
        this.state = {fortaleza:0,quixada:0,limoeiro:0,juazeiro:0}
        //this.subtracao = this.subtracao.bind(this) //se o subtracao sai fora do escopo de SomaSubtrai, ao menos ele leva a referencia do this
    }


    render(){
        return(
            
            <View style={{flexDirection:'column'}}>

                <Text style={{alignSelf:'center'}}>
                    <strong>VOTAÇÃO DAS CIDADES</strong>
                </Text>

                <Text>Fortaleza: {this.state.fortaleza}</Text>
                <Text>Quixadá: {this.state.quixada}</Text>
                <Text>Limoeiro:{this.state.limoeiro}</Text>
                <Text>Juazeiro:{this.state.juazeiro}</Text>

                <br/>

                <Text>A mais votada:</Text>

                <br/>

                <Button
                    title='Fortaleza'  
                    onPress= {
                        ()=>{
                            this.setState({fortaleza : this.state.fortaleza + 1})
                        }
                    }               
                />
                <br/>
                <Button
                    title='Quixadá' 
                    onPress= {
                        ()=>{
                            this.setState({quixada : this.state.quixada + 1})
                        }
                    }                  
                />
                <br/>
                 <Button
                    title='Limoeiro'   
                    onPress= {
                        ()=>{
                            this.setState({limoeiro : this.state.limoeiro + 1})
                        }
                    }                
                />
                <br/>
                <Button
                    title='Juazeiro' 
                    onPress= {
                        ()=>{
                            this.setState({juazeiro : this.state.juazeiro + 1})
                        }
                    }                  
                />

            </View>
           
        )
    }
}