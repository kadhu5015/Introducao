//esse arquivo que diz como eu navego entre as páginas
import Home from "./Home";
import About from './About';

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Modal from './Modal';

//COM MODAL

const PilhaDasTelas = createStackNavigator()
const PilhaRaiz = createStackNavigator()

//as telas usuais do meu sistema (home e about)

function FuncaoPilhaDasTelas(){
    return(
        <PilhaDasTelas.Navigator
            initialRouteName="Home"
        >

            <PilhaDasTelas.Screen
                name='Home' //nome do link
                component={Home} //quando eu clico vem pra esse componente
                options={{title:'Tela Inicial'}}
            />

            <PilhaDasTelas.Screen
                name='About'
                component={About}
                options={{title:'About'}}
            
            />

        </PilhaDasTelas.Navigator>
    )
}

//a funcao da pilha anterior + a tela modal que ficará por cima

function FuncaoPilhaRaiz(){
    return(
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen
                    name='PilhaDasTelas'
                    component={FuncaoPilhaDasTelas}
                />
                <PilhaRaiz.Screen
                    name='Modal'
                    component={Modal}
                    options={{headerShown:false}}
                
                />
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}

export default FuncaoPilhaRaiz

/*
const Pilha = createStackNavigator()

function Routes(){
    return(
        //navigationContainer é a biblioteca genérica básica
        //o navigation container passa a propriedade navigate para os filhos
        <NavigationContainer> 
            <Pilha.Navigator
                initialRouteName="Home"
            >
                
                <Pilha.Screen

                    name='Home' //nome do link
                    component={Home} //quando eu clico vem pra esse componente
                    options={{title:'Tela Inicial'}} //é aquele nome que fica em cima
                />
                <Pilha.Screen

                    name='About'
                    component={About}
                    options={{title:'About'}}
                
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default Routes*/