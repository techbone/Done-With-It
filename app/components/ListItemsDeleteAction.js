import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemsDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemsDeleteAction;
