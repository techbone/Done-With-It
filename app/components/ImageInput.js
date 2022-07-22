import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.Image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 100,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
