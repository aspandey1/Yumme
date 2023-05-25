import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { RECIPE_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";

const RecipesScreen = (e) => {
  const navigation = useNavigation();

  const [userInput, setUserInput] = useState();
  const [response, setResponse] = useState([]);
  const searchRecipe = () => {
    let options = {
      method: "GET",
      headers: { "x-api-key": RECIPE_API_KEY },
    };

    let url = "https://api.api-ninjas.com/v1/recipe?query=" + userInput;

    fetch(url, options)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="search"
          size={20}
          color={"grey"}
          style={styles.search}
        />
        <TextInput
          placeholder="Search Recipe"
          returnKeyType="search"
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={(userInput) => setUserInput(userInput)}
          onSubmitEditing={searchRecipe}
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={response}
          renderItem={({ item }) => (
            <View style={styles.recipeContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push("Show", {
                      title: item.title,
                      ingredients: item.ingredients,
                      instructions: item.instructions,
                      servings: item.servings,
                    });
                  }}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>View Recipe</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#eed9c4",
    flex: 1,
  },
  inputContainer: {
    marginTop: 15,
    width: "90%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 18,
    height: 55,
    marginBottom: 5,
    borderWidth: 2,
  },
  input: {
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    color: "black",
    width: "90%",
    borderBottomRightRadius: 18,
    borderTopRightRadius: 18,
    borderRightWidth: 2,
  },
  search: {
    paddingTop: 15,
    paddingLeft: 18,
  },
  recipeContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 18,
    paddingHorizontal: 15,
    paddingVertical: 28,
    alignItems: "center",
    borderRadius: 2,
    backgroundColor: "#3D3D3D",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  title: {
    width: "60%",
    color: "white",
    fontWeight: "bold",
  },
  listContainer: {
    marginBottom: 78,
    width: Dimensions.get("window").width,
  },
  button: {
    backgroundColor: "#eed9c4",
    padding: 10,
    borderRadius: 10,
    fontWeight: "bold",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default RecipesScreen;
