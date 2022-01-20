import React, {Component, useEffect, useState} from "react";
import {View,Text} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
import { Button } from "react-native-elements/dist/buttons/Button";
import { ScrollView } from "react-native-gesture-handler";

import firebase from './firebase'




const ListUserScreen = (props)=>{

    const [alunos, setAlunos] = useState([{id:'',name:'', sobrenome:'', curso:'', ira:''}])
    useEffect(
        ()=>{
            firebase.db.collection('alunos').onSnapshot(
                (queryOnSnapshot)=>{
                    const alunos = []
                    queryOnSnapshot.docs.forEach(
                        (doc)=>{
                            const {name,sobrenome,curso,ira} = doc.data()
                            alunos.push({id:doc.id, name,sobrenome,curso,ira})
                        }
                    )
                    setAlunos(alunos)
                }
            )
        },
        []
    )

    return(
        <ScrollView>
            <Button 
                onPress={
                    ()=>{
                        props.navigation.navigate('AddUserScreen')
                        
                    }
                    
                }
                title='Add user'
            />
            {
                alunos.map(
                    (aluno) =>{
                        return(
                            <ListItem
                                key={aluno.id}
                                bottomDivider
                                onPress={
                                    ()=>{
                                        props.navigation.navigate('EditUserScreen',{alunoId:aluno.id})
                                    }
                                }
                            >
                                <ListItem.Chevron/>
                                <Avatar
                                    source={{
                                        uri:'https://static.wikia.nocookie.net/irmaodojorel/images/3/30/Irm%C3%A3o_do_Jorel.png/revision/latest/scale-to-width-down/200?cb=20180804223303&path-prefix=pt-br'
                                    }}
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{aluno.name} {aluno.sobrenome}</ListItem.Title>
                                    <ListItem.Subtitle>{aluno.curso} - IRA: {aluno.ira}</ListItem.Subtitle>
                                </ListItem.Content>

                            </ListItem>
                        )
                    }
                )
            }

        </ScrollView>
    )
}

export default ListUserScreen
