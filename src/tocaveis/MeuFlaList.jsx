import React from 'react'
import {FlatList, Text, View} from 'react-native'

const MeuFlatList = () =>{
   
    return(
        <View style={{flex:1, paddingTop:22}}>  
            <FlatList 
            data={
                [
                    {nome: "Eduardo", key:'1'},
                    {nome: "Almeida", key:'2'},
                    {nome: "Feitosa", key:'3'},
                ]
            }

            renderItem={
                ({item})=>{
                    return(
                        <Text style={{padding:15,fontSize:18}}>
                            {item.nome}
                        </Text>
                    )
                }
            }     
            > 
            </FlatList>
        </View>
    )
}


export default MeuFlatList;