import React, {Component, useEffect, useState} from "react";
import {View,Text, ScrollView,Button, ActivityIndicator,StyleSheet} from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import firebase from '../../firebase/firebase_config'

/*
export default class EditUserScreen extends Component(){
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

const EditUserScreen = (props)=>{
    const initialState = {id:'',name:'',email:'', phone:''}
    const [user, setUser] = useState(initialState)

    useEffect(
        ()=>{
            getUserById(props.route.params.userId)
        },[]
    )

    const handleChangeText = (value, prop) =>{
        setUser({...user,[prop]:value})
    }
    const getUserById = async (id) => {

        const dbRef = firebase.db.collection('users').doc(id) //aqui eu pego o documento específico do id que busquei em outra página
        const doc = await dbRef.get()
        const user = doc.data()
        setUser({...user, id:doc.id})

    }

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
        await dbRef.delete();
        props.navigation.navigate('ListUserScreen')
    }
    const updateUser = ()=>{
        console.log(user)
        const userRef = firebase.db.collection('users').doc(user.id);
         userRef.set({
            name:user.name,
            email:user.email,
            phone:user.phone
        })
        setUser(initialState)
        props.navigation.navigate('ListUserScreen')
    }

    return(
        <ScrollView style={styles.container}>
            <View>
                <TextInput
                    placeholder="Name"
                    style={styles.inputGroup}
                    value={user.name}
                    onChangeText={(value)=>{handleChangeText(value,'name')}}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Email"
                    style={styles.inputGroup}
                    value={user.email}
                    onChangeText={(value)=>{handleChangeText(value,'email')}}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Phone"
                    style={styles.inputGroup}
                    value={user.phone}
                    onChangeText={(value)=>{handleChangeText(value,'phone')}}
                />
            </View>

            <View>
                <Button
                    title='Update'
                    onPress={()=>updateUser()}
                />
            </View>

            
            <View>
                <Button style={styles.btn}
                    title='Delete'
                    color='#E37399'
                    onPress={
                        ()=>deleteUser()
                    }
                />
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15
    },
    loader:{

    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottonWidth:1, 
        borderBottonColor:'#cccccc'

    },
    btn:{
        marginTop:8
    }
})

export default  EditUserScreen
