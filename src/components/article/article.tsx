import React from 'react'
import { Text, View } from 'react-native'


interface ArticleProps{
  title:string,
  message:string,
}

function Article({title,message}:ArticleProps) {
  
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>{message}</Text>
      </View>
    </View>
  )
}

export default Article