import React from 'react'
import { Tabs } from 'expo-router'
function _layout() {
  return (
   <>
    <Tabs screenOptions={{tabBarActiveTintColor:"blue"}}>
      <Tabs.Screen name='homeScreen' options={{title:"Home"}}/>
      <Tabs.Screen name='profile/profileScreen' options={{title:"Perfil"}}/>
    </Tabs>
   </>
  )
}

export default _layout