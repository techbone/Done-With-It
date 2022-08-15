import React, { useState } from "react";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";

const App = () => {
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUris) => imageUris !== uri));
  // };

  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
};

//paddimng given to the Screen in the Login screen not working

export default App;
