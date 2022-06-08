import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";
import Screen from "../components/Screen";

import LIstItemSeparator from "./LIstItemSeparator";
import listItemDeleteAction from "../components/ListItemsDeleteAction";
import ListItemsDeleteAction from "../components/ListItemsDeleteAction";

const initialMessages = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../assets/etudaye.jpg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../assets/etudaye.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
              <ListItemsDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={LIstItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: "2",
              title: "T2",
              description: "D2",
              image: require("../assets/etudaye.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
