import React, {Component} from "react";
import {FlatList, Text, View} from 'react-native'
import { PanResponder } from "react-native-web";

export default class MyNetworking extends Component{

    constructor(props){
        super(props)
        this.state={isLoading:true,data:null}
    }
componentDidMount
    componentDidMount(){
        return fetch('https://reactnative.dev/movies.json')
        .then(//aqui eu transformo o que pego do link em json
            (response)=>{
               return response.json()
            }
        )
        .then( //eu preciso desse outro then pra poder acessar as coisas do link
            (responseJson)=>{
                console.log(responseJson.movies)
                this.setState({isLoading: false, data: responseJson.movies})
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
    }

    render(){
        if (this.state.isLoading){
            return(
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
        return(
            <View>
                  <FlatList 
            data={this.state.data}

            renderItem={
                ({item})=>{
                    return(
                        <Text style={{padding:15,fontSize:18}}>
                            {item.title} - {item.releaseYear}
                        </Text>
                    )
                }
            }   
            keyExtractor={
                (item,index)=>index+item
            }  
                     />
            </View>

        )
    }



}