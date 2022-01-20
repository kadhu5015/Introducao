import React, {Component, useEffect, useState} from "react";
import {View,Text} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
import { Button } from "react-native-elements/dist/buttons/Button";
import { ScrollView } from "react-native-gesture-handler";

import firebase from '../../firebase/firebase_config'
/*
export default class ListUserScreen extends Component(){
    render(){
        return(
            <View>
                <Text>
                    Editar
                </Text>
            </View>
        )
    }
}
*/



const ListUserScreen = (props)=>{

    const [users, setUsers] = useState([{id:1,name:'Aragao', email:'aragao@ufc.br',phone:'666'}])

    //essa função aqui embaixo que faz a mágica de pegar todas as coisas do banco de dados e jogar na tela
    useEffect(
        ()=>{
            firebase.db.collection('users').onSnapshot(
                (queryOnSnapshot)=>{
                    const users = []
                    queryOnSnapshot.docs.forEach(
                        (doc)=>{
                            const {name,email,phone} = doc.data()
                            users.push({id:doc.id, name,email,phone})
                        }
                    )
                    setUsers(users)
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
                users.map(
                    (user) =>{
                        return(
                            <ListItem
                                key={user.id}
                                bottomDivider
                                onPress={
                                    ()=>{
                                        props.navigation.navigate('EditUserScreen',{userId:user.id})
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
                                    <ListItem.Title>{user.name}</ListItem.Title>
                                    <ListItem.Subtitle>{user.email} - {user.phone}</ListItem.Subtitle>
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
