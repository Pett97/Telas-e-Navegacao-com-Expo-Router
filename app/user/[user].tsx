import React from 'react'
import { Text, View } from 'react-native'
import { useLocalSearchParams,useRouter } from 'expo-router'

function User() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const {id}= params;

  return (
    <View><Text>User ID:{id}</Text></View>
  )
}

export default User