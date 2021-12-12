import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from 'react-native'

export default class Modal extends Component {

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30}}>
                    Seu perfil
                </Text>
                <View>
                <Image
                   style={{ width: 200,
                    height: 200,}}
                source={{ uri: 'https://static.wikia.nocookie.net/irmaodojorel/images/3/30/Irm%C3%A3o_do_Jorel.png/revision/latest/scale-to-width-down/200?cb=20180804223303&path-prefix=pt-br'}}
                />
            </View>

                <Text style={{ fontSize: 18, padding: 5}}>
                    Nome: {this.props.route.params.nome}
                </Text>
                <Text style={{ fontSize: 18, padding: 5 }}>
                    Idade: {this.props.route.params.idade}
                </Text>
                <Text style={{ fontSize: 18, padding: 5, paddingBottom: 15 }}>
                    Email: {this.props.route.params.email}
                </Text>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
            </View>
        );
    }
}
