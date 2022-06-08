import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Constants from "expo-constants";

const Screen = ({ children }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
