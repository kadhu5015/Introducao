import { useLinkProps } from '@react-navigation/native'
import React, {Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'


export default class About extends Component{
    render(){
        return(
            <View style={estilos.container}>
        
            <Text style={estilos.texto}>Sobreh</Text>
            <Text style={estilos.texto}>nome: {this.props.route.params.nome}</Text>
            <Text style={estilos.texto}>idade: {this.props.route.params.idade}</Text>
    
    
            <Button 
                        title='Voltar'
                        onPress={()=>{this.props.navigation.goBack()}}
                     
            />
             <Button 
                        title='Modal'
                        onPress={()=>{this.props.navigation.navigate('Modal')}}
                     
            />
        </View>

        )
    }


}
/*
const About = (props) => {
    console.log("Props:")
    console.log(props);
    <View style={estilos.container}>
        
        <Text style={estilos.texto}>Sobreh</Text>
        <Text style={estilos.texto}>nome: {this.props.route.params.nome}</Text>
        <Text style={estilos.texto}>a</Text>


        <Button 
                    title='Ir para o home'
                 
        />
    </View>
}*/
const estilos = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    texto:{
        fontSize:24,
        fontWeight: 'bold',
        fontFamily:'Arial'
    }
})

//export default About