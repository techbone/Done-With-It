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

hnRefresh={() => {
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
