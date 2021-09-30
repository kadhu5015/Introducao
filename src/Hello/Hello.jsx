import React, {Component} from "react"; //components permite programar orientado a objetos
import { View, Text } from 'react-native'


//FORMAS DE CRIAR COMPONENTES REACT

//Criando componentes usando classe

/*
export default class Hello extends Component{
    render(){
        return(
            <View>
                <Text>Olá, com classe</Text>
            </View>
        )
    }
}
*/

//Criando componentes da maneira tradicional
/*
export default function Hello(){
    return(
        <View>
            <text>Hello tradicional</text>
        </View>
    )
}
*/


//Criando componente e depois exportando:
/*
function hello3 (){
    return <View>
                <Text>Componente 3</Text>
            </View>
}

export default hello3;
*/

//Componente com função arrow
/*
export default ()=>{
    return(
        <View>
            <Text>Componente com função arrow</Text>
        </View>
    )
}
*/

//Forma mais leve da função arrow:


export default ()=> 
    <View>
        <Text>Funcao arrow mais leve</Text>
    </View>
