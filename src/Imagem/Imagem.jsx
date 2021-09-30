import React, { Component } from "react";
import { Image } from 'react-native'

export default class Imagem extends Component{
   
    render(){
       let img = {uri:'https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/04/12/749144/20190412122053420189e.jpg'}
        return(
            <Image 
            source={img}
            style={{width:300,height:300}} //não recomendado
            
            ></Image>
        )
    }
}