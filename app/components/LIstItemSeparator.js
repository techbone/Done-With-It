import { View, StyleSheet } from "react-native";
import React from "react";

import colors from "../config/colors";

const LIstItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default LIstItemSeparator;
