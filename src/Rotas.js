import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { cores } from "./estilos";


import Carrinho from "./telas/Carrinho";
import Servicos from "./telas/Servicos";


const Tab = createBottomTabNavigator();


export default function Rotas(){

    return  <NavigationContainer>
                <Tab.Navigator
                   screenOptions={{
                    tabBarActiveTintColor:cores.roxo,
                    tabBarInactiveTintColor:cores.claro,
                    tabBarInactiveBackgroundColor:cores.laranja,
                    tabBarActiveBackgroundColor:cores.roxo,
                
                    tabBarLabelStyle:{
                        width:'100%',
                        fontSize:16,
                        flex:1,
                        fontWeight:'bold',
                        lineHeight:21,
                        marginTop:3,
                        paddingTop:15,
                        backgroundColor:cores.laranja,
                    },
                    showIcon: false,
                    tabBarIconStyle: { display: "none" },
                    style:{
                        height:70,
                    },
                    tabBarHideOnKeyboard:true,
                }}
                
                >
                    <Tab.Screen name="Serviços" component={Servicos}  />
                    <Tab.Screen name="Carrinho" component={Carrinho} />
                </Tab.Navigator>
            </NavigationContainer>

}
