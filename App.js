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
  const [ImageUri, SetImageUri] = useState(false);

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
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: ImageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
};

//paddimng given to the Screen in the Login screen not working

export default App;
