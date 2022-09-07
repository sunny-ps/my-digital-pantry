import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Pill } from "../Pill";

import type { RecipeProps } from "$types";
import { theme } from ".././../theme";

export interface IRecipeCardProps extends RecipeProps {}

const RecipeCard: FC<IRecipeCardProps> = ({
  recipeTitle,
  recipePrepTime,
  recipeServe,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18.2 }}>
          {recipeTitle}
        </Text>
        <Ionicons name="bookmark-outline" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={{
            uri: "https://via.placeholder.com/111x100?text=cool+picture+here",
          }}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            flexShrink: 1,
            paddingHorizontal: 10,
            maxHeight: "87%",
            justifyContent: "space-between",
          }}
        >
          <Text>Prep time: {recipePrepTime}</Text>
          <Text>Serves: {recipeServe}</Text>
          <Pill isDisabled label="You have all the ingredients" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.colorBlack,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 13,
  },
});
export default RecipeCard;
