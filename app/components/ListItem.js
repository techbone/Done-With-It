import { View, StyleSheet, Image } from "react-native";
  import React from "react";
  import AppText from "./AppText";
  import colors from "../config/colors";

  const ListItem = ({ title, subTitle, image }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.SubTitle}>{subTitle}</AppText>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 10,
    },
    SubTitle: {
      fontWeight: "500",
      color: colors.medium,
    },
    title: {
      fontWeight: "500",
    },
  });

  export default ListItem;
