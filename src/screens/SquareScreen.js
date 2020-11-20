import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";
import { Text, View, StyleSheet } from "react-native";
const colorChange = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 256 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 256 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 256 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      // If statement used
      // if (red + change > 256 || red + change < 0) {
      //   return;
      // } else {
      //   setRed(red + change);
      // }
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", colorChange)}
        onDecrease={() => setColor("red", -1 * colorChange)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", colorChange)}
        onDecrease={() => setColor("blue", -1 * colorChange)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", colorChange)}
        onDecrease={() => setColor("green", -1 * colorChange)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
