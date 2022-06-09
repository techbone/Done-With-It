import { TextInput } from "react-native";
import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import MessagesScreen from "./app/components/MessagesScreen";
import Screen from "./app/components/Screen";

import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

const App = () => {
  return (
    <Screen>
      <TextInput
        placeholder="First Name"
        style={{
          borderEndColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
};

export default App;
