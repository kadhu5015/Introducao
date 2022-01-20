import React, {Component, useState} from "react";
import {View,Text, Button, TextInput, ScrollView, StyleSheet} from 'react-native'

import firebase from '../../firebase/firebase_config';



const AddUserScreen = (props)=>{

    const initialState = {name: '', email: '', phone: ''}
    const [state, setState] = useState(initialState)
/*
    const addNewUser = () => {
        console.log(state)
    }
*/

//adicionando coisas ao firebase dessa forma
//o await significa que tenho que esperar o try acabar para terminar o resto da funcao
    const addNewUser = async () => {
        try{
              await firebase.db
                .collection('users')
                .add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone
                })
                console.log("OK!")
                props.navigation.navigate('ListUserScreen')
        }
        catch(error){
            console.log(error)
        }
    }

    const handleChangeText = (value, name) => { //o "name" é o nome da propriedade
       /* if (name == 'name') setState({'name':value})
        else if (name == 'email' ) setState({'email': value}) 
        else if (name == 'phone') setState ({'phone': value})
        */
       setState({...state,[name]:value})
    
    }

    return(
        <ScrollView style= {styles.container}>
            <View >
                <TextInput style={styles.TextInput}
                    placeholder="Name"
                    value={state.name}
                    onChangeText= {(value)=> handleChangeText(value, 'name')}
                />
                <TextInput style={styles.TextInput}
                    placeholder="Email"
                    value={state.email}
                    onChangeText= {(value)=> handleChangeText(value, 'email')}

                />
                <TextInput style={styles.TextInput}
                    placeholder="Phone"
                    value={state.phone}
                    onChangeText= {(value)=> handleChangeText(value, 'phone')}

                />
            </View>
            <View>
                <Button title='Add user' onPress={()=>addNewUser()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35
    },
    TextInput: {
        flex:1, 
        padding: 0,
        top: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccccc'
    }
})

export default AddUserScreen

/*
export default class AddUserScreen extends Component(){
    render(){
        return(
            <View>
                <Text>
                    Add
                </Text>
            </View>
        )
    }
}
*/