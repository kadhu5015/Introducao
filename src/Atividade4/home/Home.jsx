import React, { Component } from "react";
import { View, Button, Text } from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <View style={{alignItems: 'center' , justifyContent: 'center', }}>
                <View style={{ width: 320}}>

                    <View>
                        <Button title="Cadastro" onPress={() => this.props.navigation.navigate('Cadastro')} />
                    </View>

                    <View>
                        <Button title="Calculadora de IMC" onPress={() => this.props.navigation.navigate('Calcular')} />
                    </View>

                    <View>
                        <Button title="Sobre" onPress={() => this.props.navigation.navigate('Sobre',{...this.props.route.params})} />
                    </View>
                </View>

            </View>
        )
    }
}