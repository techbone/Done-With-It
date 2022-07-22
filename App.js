import React, { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

const requestPermission = async () => {
  const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!granted) alert("you need to enable permission to access the library");
};

const App = () => {
  const [ImageUri, setImageUri] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) return SetImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <Screen>
      <ImageInput
        onChangeImage={(uri) => setImageUri(uri)}
        imageUri={ImageUri}
      />
    </Screen>
  );
};

//paddimng given to the Screen in the Login screen not working

export default App;
