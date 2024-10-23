import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "./buttom.style";
interface ButtonProps{
  title:string;
  onPress: () => void;
}

function Buttom({title,onPress}:ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={style.buttomStyle} onPress={onPress}>
        <Text style={style.buttomTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Buttom;
