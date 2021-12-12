import React, {Component} from "react";
import { ScrollView, Image, Text, View } from "react-native";

export default class MeuScroll extends Component {
    render(){
        //o ScrollView adiciona uma barra de rolagem
        const foto = 'https://static.wikia.nocookie.net/irmaodojorel/images/3/30/Irm%C3%A3o_do_Jorel.png/revision/latest/scale-to-width-down/200?cb=20180804223303&path-prefix=pt-br'
        return(
            <ScrollView> 
                <Text
                    style={{fontSize:96}}
                >
                    Scroll me please
                </Text>
                <Image source={{uri:foto, width: 64, height: 64}}/>
            </ScrollView>
        )
    }
}