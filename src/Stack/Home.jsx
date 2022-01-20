import React, {Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.texto}>
                    Página Home</Text>
                <Button 
                    title='Ir para o about'
                    onPress={
                        //o nome dentro do navigate tem que ser o mesmo da página que quero ir
                        //o segundo elemento é o que eu quero passar para o about
                        ()=>{
                            this.props.navigation.navigate('About',{ nome : 'Eduardo',idade: '18'})
                        }
                    }
                />
            </View>
        )
    }
}

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
