import React, {Component} from "react";
import {View, Text, Button} from 'react-native';
import IMCMsg from "./IMCMsg";

/*export default class IMCCalc extends Component{

    
    
    render(){
        let imc = this.props.peso/(this.props.altura*this.props.altura)
        return (
            <View>
                <Text style={{padding:10,fontSize: 20}}><strong>Seu IMC é: {imc}</strong></Text>
                <IMCMsg imc2={imc}></IMCMsg>
            </View>
        )
    }
}
*/

export default class IMCCalc extends Component{
   
    render(){

        const {peso,altura} = this.props
        if(!peso  || !altura) return null 
        const imc = peso/(altura*altura)
        return(
            <View>
                <Text style={ {fontSize: 18}}><strong>Seu IMC é: {imc}</strong></Text>
                <IMCMsg imc={imc}></IMCMsg>
            </View>
            
        )
    }
}