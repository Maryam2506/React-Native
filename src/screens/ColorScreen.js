import React, { useState } from "react";
import { FlatList } from "react-native";
import { View, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <View
        style={{ height: 200, width: "100%", backgroundColor: randomRgb() }}
      />
      <FlatList data={colors}
      renderItem={({item}) => {
          return  <View
          style={{ height: 100, width: 100, backgroundColor: item }}
        />
      }}/>
    </View>
  );
};
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
