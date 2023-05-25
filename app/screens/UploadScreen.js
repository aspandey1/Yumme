import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../firebaseConfig";
import "firebase/auth";

backColor = "black";
cardColor = "#eed9c4";
textColor = "black";

const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const source = { uri: result.assets[0].uri };
      console.log(source);
      setImage(source);
    }
  };

  const uploadPost = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);

    // Upload the image
    const ref = firebase.storage().ref().child(filename);
    const snapshot = await ref.put(blob);

    // Get URL of the uploaded image
    const downloadURL = await snapshot.ref.getDownloadURL();

    // Get the currently logged in user
    const currentUser = firebase.auth().currentUser;
    const { uid } = currentUser;
    const userRef = firebase.firestore().collection("Users").doc(uid);
    const userDoc = await userRef.get();
    const firstName = userDoc.data().firstName;
    const lastName = userDoc.data().lastName;
    const email = userDoc.data().email;
    const collectionRef = firebase.firestore().collection("Posts");
    await collectionRef.add({
      downloadURL,
      description,
      likes: 0,
      dislikes: 0,
      comments: "",
      saves: "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      uid: uid,
    });

    setUploading(false);
    Alert.alert("Photo Uploaded Successfully!");
    setImage(null);
    setDescription("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Select an Image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        {image && (
          <TextInput
            style={styles.descriptionInput}
            placeholder="Enter Description!"
            value={description}
            onChangeText={setDescription}
          />
        )}
        <TouchableOpacity style={styles.uploadButton} onPress={uploadPost}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backColor,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  selectButton: {
    backgroundColor: cardColor,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginBottom: 16,
    marginTop: 8,
  },
  uploadButton: {
    backgroundColor: cardColor,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginTop: 16,
  },
  buttonText: {
    color: textColor,
    fontWeight: "bold",
    fontSize: 18,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  descriptionInput: {
    backgroundColor: cardColor,
    width: 300,
    height: 80,
    borderRadius: 8,
    paddingHorizontal: 16,
    textAlignVertical: "top",
    marginBottom: 16,
    marginTop: 8,
    paddingTop: 8,
  },
});
