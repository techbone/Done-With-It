import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import ListItem from "./ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Musa Muhammad Etudaye"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20.00,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20.00,
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
