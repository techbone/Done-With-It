import { StyleSheet } from "react-native";
import React from "react";

import AppText from "./AppText";

const ErrorMessage = ({ error }) => {
  if (!error) {
    null;
  }
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
