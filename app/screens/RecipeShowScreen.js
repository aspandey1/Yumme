import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const RecipeShowScreen = () => {
  const route = useRoute();
  let title = route.params.title;
  let ingredients = route.params.ingredients;
  let instructions = route.params.instructions;
  let servings = route.params.servings;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{servings}</Text>
      <Text>{ingredients}</Text>
      <Text>{instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eed9c4",
    flex: 1,
  },
});

export default RecipeShowScreen;
