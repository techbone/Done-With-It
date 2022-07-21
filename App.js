import React from "react";

import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListItem from "./app/components/ListItem";
import { SafeAreaView } from "react-native";
import Screen from "./app/components/Screen";
import ListItemsDeleteAction from "./app/components/ListItemsDeleteAction";
import ListingScreen from "../DoneWithIt/app/screens/AccountScreen";
import Messages from "./app/components/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/components/MessagesScreen";
const App = () => {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
};

//paddimng given to the Screen in the Login screen not working

export default App;
