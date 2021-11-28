import React, {Component} from "react";
import {View, Text, Button,StyleSheet} from 'react-native';

export default class IMCMsg extends Component{
    
    render(){
        let x = this.props.imc
        let msg

        if (x > 40){
            return(
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={styles.vermelho}>Obesidade III (Mórbita)</Text>
                 </View>
            )
            
        } else if (x>= 35){
            return (
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={styles.vermelho}>Obesidade II (severa)</Text>
                </View>
            )
            
        } else if (x >= 30){
            return (
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={styles.vermelho}>Obesidade I (severa)</Text>
                </View>
            )
    
        } else if (x >= 25){
            return (
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={styles.vermelho}>Acima do peso</Text>
                </View>
            )

        } else if (x >= 18.5){
            return (
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={styles.azul}>Peso normal</Text>
                </View>
            )
    
        } else if ( x >= 17){
            return (
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={styles.vermelho}>Abaixo do peso</Text>
                </View>
            )
          
        } else if (x < 17){
            return (
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={styles.vermelho}>Muito abaixo do peso</Text>
                </View>
            )
           
        }

        return (
            <View>
                <Text>{msg}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    azul: {
    
        fontSize: 18,
        color: "blue",
        fontWeight: "bold"
    },
    vermelho: {
      
        fontSize: 18,
        color: "red",
        fontWeight: "bold"
    }
})