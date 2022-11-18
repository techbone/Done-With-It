import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacidfdvdvdvty>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
