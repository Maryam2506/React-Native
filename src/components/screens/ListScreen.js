import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Frined 1", age: 20 },
    { name: "Frined 2", age: 45 },
    { name: "Frined 3", age: 32 },
    { name: "Frined 4", age: 27 },
    { name: "Frined 5", age: 53 },
    { name: "Frined 7", age: 30 },
 
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

export default ListScreen;
