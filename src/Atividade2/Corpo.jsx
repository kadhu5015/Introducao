import React, { Component } from "react";
import { Image } from 'react-native'

export default class Imagem extends Component{
   
    render(){
       let img = {uri:'https://i.ytimg.com/vi/N1UDsjqwGqc/hqdefault.jpg'}
        return(
            <Image 
                source={img}
                style={{width:300,height:300}} //não recomendado
            
            ></Image>
        )
    }
}