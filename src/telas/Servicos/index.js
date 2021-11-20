import React from "react";
import {FlatList } from 'react-native';
import Item from "./Item";

const servicos = [
    {
        id:1,
        nome:'banho',
        preco:79.9,
        descricao:'Nao de banho no seu gato, mas se precisar é so chamar',
    },
    {
        id:2,
        nome:'Vacina',
        preco:80.0,
        descricao:'Uma dose da Vacina V4',
    },
    {
        id:3,
        nome:'Vacina Atirrábica',
        preco:89.9,
        descricao:'Uma dose da Vacina por ano',
        
    },
    {
        id:4,
        nome:'tosa higiênica',
        preco:45.0,
        descricao:'O valor da Tosa pode varia de acordo com o tamanho do cão',
        
    },
    {
        id:5,
        nome:'tosa Cão de porte grande',
        preco:150.0,
        descricao:'O serviço de tosa com tesoura apresenta e banho com hidratação',       
    }
]

export default function Servicos(){
    return <>
             <FlatList 
                data={servicos}
                removeClippedSubviews={false}
                renderItem={({item})=> <Item {...item} />}
                keyExtractor={({id})=>String(id)}
              />  
            </>
}