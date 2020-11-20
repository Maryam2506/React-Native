import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({imageSource, title, score}) => {
 
  return (
    <View>
      {/* <Image source={require('../../../assets/beach.jpg')} /> */}
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
