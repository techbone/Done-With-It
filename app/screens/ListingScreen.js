import { Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const Listings = [
  {
    id: "1",
    title: "Red jacket for sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: "2",
    title: "Couch in great condition",
    price: "1000",
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(Listing) => Listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
