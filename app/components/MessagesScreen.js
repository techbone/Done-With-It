import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";
import Screen from "../components/Screen";

import LIstItemSeparator from "./LIstItemSeparator";
import listItemDeleteAction from "../components/ListItemsDeleteAction";
import ListItemsDeleteAction from "../components/ListItemsDeleteAction";

const messages = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../assets/use.jpeg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../assets/use.jpeg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => {
          message.id.toString();
        }}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemsDeleteAction onPress={() => console.log(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={LIstItemSeparator}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
