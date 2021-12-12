import React, {Component} from "react";
import {View, Text, TextInput, Button, Alert} from 'react-native'


export default class Cadastro extends Component{

    constructor(props){
        super(props)
        this.state = {nome:null, idade:null, email: null}
    }

    render(){
        return( 
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                style={{height:130, width: 400, backgroundColor: "#e85151"}}
                placeholder="Nome"
                onChangeText={(nome)=> this.setState({nome})}
                >
                </TextInput>

                <TextInput
                style={{height:130, width: 400, backgroundColor: "#e85151"}}
                placeholder="Idade"
                onChangeText={(idade)=> this.setState({idade})}>
                    
                </TextInput>

                <TextInput
                style={{height:130, width: 400, backgroundColor: "#e85151"}}
                placeholder="Email"
                onChangeText={(email)=> this.setState({email})}>
                </TextInput>
                
                <View  style={{width: 300}}>
                <Button
                    title='Ok'
                    onPress = {() => this.props.navigation.navigate('Perfil',{nome:this.state.nome,idade:this.state.idade,email:this.state.email})}
                />
                </View>    
            
            </View>
        )
    }


}