import { NavigationProp } from "@react-navigation/native";

export interface NavigationPropType {
  navigation: NavigationProp<any, any>;
}

export interface ItemProps {
  id: string | number;
  name: string;
  image: string;
  measure: string;
  expiry: Date;
  status?: string;
}

export interface RecipeProps {
  recipeTitle: string;
  recipePrepTime: string;
  recipeServe: number;
}

export interface User {
  token?: string;
}
