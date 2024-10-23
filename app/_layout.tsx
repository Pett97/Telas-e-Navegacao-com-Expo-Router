import React from "react";
import { Stack } from "expo-router";

function _layout() {
  return (
      <Stack screenOptions={{
        headerStyle:{
          backgroundColor:"blue"
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
          fontWeight:"bold",
        }
      }}>
        <Stack.Screen name="index" options={{title:"Pagina Inicial"}}></Stack.Screen>
        <Stack.Screen name="home" options={{title:"Home De Usuarios"}}></Stack.Screen>
      </Stack>
  )

}

export default _layout;
