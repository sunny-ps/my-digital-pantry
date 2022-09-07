import { FC } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { RecipeCard, CustomSafeAreaView } from "$components";

import type { NavigationPropType } from "$types";

interface IRecipesScreenProps extends NavigationPropType {}

const recipeData = [
  {
    id: 1,
    title: "Broccoli and Cheese Salad",
    prepTime: "20 min",
    serves: 4,
  },
  {
    id: 2,
    title: "Mushroom Chilli",
    prepTime: "45 min",
    serves: 4,
  },
];

const NavBar: FC<IRecipesScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Pressable
        style={{ paddingHorizontal: 9, marginVertical: 10 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={32} color="black" activeOpacity={0} />
      </Pressable>
    </View>
  );
};

const Recipes: FC<IRecipesScreenProps> = ({ navigation }) => {
  return (
    <CustomSafeAreaView>
      <NavBar navigation={navigation} />

      <View
        style={{
          paddingHorizontal: 17,
        }}
      >
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 5 }}>
            Recipes
          </Text>
          <Text>Here are the recipes that include the items you selected</Text>
        </View>
        <ScrollView>
          {recipeData.map((item) => (
            <View key={item.id} style={{ marginBottom: 15 }}>
              <RecipeCard
                recipeTitle={item.title}
                recipeServe={item.serves}
                recipePrepTime={item.prepTime}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </CustomSafeAreaView>
  );
};

export default Recipes;
