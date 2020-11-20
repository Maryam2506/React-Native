import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  //  Todo Fix

  // State used
  const [counter, setCounter] = useState(0);
  // Simple method
  //   let counter = 0;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // State used
          setCounter(counter - 1);
          // Simple method
          //   counter--;
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
