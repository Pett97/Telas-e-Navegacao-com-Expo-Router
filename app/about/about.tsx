import React from 'react'
import { Text, View } from 'react-native'
import Buttom from '../../src/components/buttom/buttom'
import { useRouter } from 'expo-router'

function About() {
  const router = useRouter();

  const toAnotherScreen = ()=>{
    console.log("123123")
    router.push('/loreIpsum/loreIpsum');
  };


  return (
    <View>
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida lorem turpis, vitae suscipit est auctor id. Praesent mattis vel nisi ac ullamcorper. Cras ut venenatis est. Fusce egestas metus eu tincidunt blandit. Aenean neque velit, mattis quis hendrerit sed, rhoncus eget lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris lacinia ullamcorper efficitur. Duis varius, tellus eu efficitur mollis, nisi est consectetur lorem, ut molestie quam ipsum sit amet odio. Quisque vel tellus nec diam euismod sodales. Integer nulla massa, dignissim quis consectetur et, pretium at sapien. Sed tristique varius leo, nec volutpat lorem tincidunt pharetra. Maecenas nulla felis, vehicula vel tincidunt a, auctor non arcu. Proin interdum orci a congue tempor. Morbi vehicula vel arcu sed cursus. Sed quis ligula tempus, porttitor nunc sed, malesuada diam. Duis ut elit vel sem feugiat ullamcorper.
      </Text>
      <Buttom title='Mais Lorem Ipsum' onPress={toAnotherScreen}></Buttom>
    </View>
  )
}

export default About