import { NavigationProp } from "@react-navigation/native";

export interface NavigationPropType {
  navigation: NavigationProp<any, any>;
}

export interface User {
  token?: string;
}
