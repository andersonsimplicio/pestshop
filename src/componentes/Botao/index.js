import React from "react";
import { TouchableOpacity,Text } from "react-native";
import funcaoEstilosPadrao from './estilos';

export default function Botao({valor,acao, pequeno=false,invertido=false,estilos}){
    const estilosPadrao = funcaoEstilosPadrao(pequeno,invertido);

    return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao,estilos]}>
                <Text style={estilosPadrao.valor}>{valor}</Text>
           </TouchableOpacity>
}