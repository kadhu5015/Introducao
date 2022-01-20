import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListUserScreen from './ListUserScreen'
import EditUserScreen from './EditUserScreen'
import AddUserScreen from './AddUserScreen'

const MainStack = createStackNavigator()

function MainStackScreen(){
    return(
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="ListUserScreen">
                <MainStack.Screen

                    name='AddUserScreen'
                    component={AddUserScreen}
                    //options={{title:'List of new users'}}

                />
                <MainStack.Screen
                
                    name='ListUserScreen'
                    component={ListUserScreen}
                   //options={{title:'List users'}}
                
                />
                <MainStack.Screen

                    name='EditUserScreen'
                    component={EditUserScreen}
                    //options={{title:'Edit users'}}
                
                />



            </MainStack.Navigator>

        </NavigationContainer>
    )
}

export default MainStackScreen