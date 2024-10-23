import React from 'react'
import { Text, View } from 'react-native';

interface PerfilProps{
  name:string;
  age:number;
}

function Perfil({name,age}:PerfilProps) {
  return (
    <View>
      <Text>Nome:{name}</Text>
      <Text>Idade:{age}</Text>
    </View>
  )
}

export default Perfil