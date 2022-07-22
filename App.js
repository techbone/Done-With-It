import React, { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const App = () => {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (ur) => {
    setImageUris([...imageUris, ur]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <Screen>
      <ImageInputList
        ImageUri={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
    </Screen>
  );
};

//paddimng given to the Screen in the Login screen not working

export default App;
