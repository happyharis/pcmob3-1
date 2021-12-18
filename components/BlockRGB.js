import React from "react";
import { View } from "react-native";

export default function BlockRGB(props) {
  // props have red, green, blue
  // props = {red: 255, green: 0, blue: 0}
  // props.red = 255
  // props.green = 0
  // props.blue = 0
  return (
    <View
      style={{
        backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
        padding: 30,
        width: "100%",
      }}
    ></View>
  );
}
