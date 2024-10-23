import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'expo-router';
import randomNumber from '../../src/handlers/randomNumber';

function HomeScreen() {
  return (
    <View>
      <View><Text>CHOME</Text></View>
      <View><Link href={{pathname:"user/[user]",params:{id:`${randomNumber()}`}}}>Usuario Aleatorio</Link></View>
    </View>
  )
}



export default HomeScreen