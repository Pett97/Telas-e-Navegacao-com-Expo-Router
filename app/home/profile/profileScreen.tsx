import React from 'react'
import {View } from 'react-native'
import Perfil from '../../../src/components/perfil/perfil'
function ProfileScreen() {
  return (
    <View>
      <Perfil name="Pett" age={12}/>
    </View>
  )
}

export default ProfileScreen