import React, {Component} from "react";
import {SectionList, StyleSheet,Text,View} from 'react-native'

export default class MySectionList extends Component{

    render(){
        return(
            <View style={estilos.container}>
                <SectionList
                
                    sections={
                        [
                            {title:'A', data:['Almeida','Abner','Jacinta','Ashley']},
                            {title:'B', data:['Carlos','Jucelia','Samanda','Janna']},
                            {title:'C', data:['Creusa','Abner','Luiza','Jaice']}
                            
                        ]
                    }

                    renderItem={ //aqui eu digo como vou renderizar o que tá dentro de data
                        ({item})=>
                            <Text style={estilos.sectionItem}>
                                {item}
                            </Text> 
                    }

                    renderSectionHeader={ //aqui eu digo como vou renderizar o tittle do sections
                        ({section})=>
                            <Text style={estilos.sectionHeader}>
                                {section.title}
                            </Text>
                        
                    } 
                    keyExtractor={
                        (item,index)=>index+item
                    }  
                />
            </View>
        );
    }

}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    sectionHeader:{
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:10,
        paddingRight:10,

        fontSize:14,
        fontWeight: 'bold',
       
        
    },
    sectionItem:{
        padding:10,
        fontSize:18,
        
    }
})