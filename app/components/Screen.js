import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Constants.statusBarHeight,
  },
});

export default Screen;
