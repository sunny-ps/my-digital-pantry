import { useState, FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../theme";

export type MenuItemKey =
  | "pantry"
  | "fridge"
  | "cupboard"
  | "recipes"
  | "overview";

export type MenuItemProps = {
  key: MenuItemKey;
  title: string;
  page: string | number | symbol;
};

export type MenuItemsSegmentedMenu = {
  [key in "lhs" | "rhs"]: Array<MenuItemProps>;
};

const PantryHeader = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItemKey>("pantry");

  const navigation = useNavigation();

  const menuItems: MenuItemsSegmentedMenu = {
    lhs: [
      { key: "pantry", title: "Pantry", page: "Pantry" },
      { key: "fridge", title: "Fridge", page: "Fridge" },
      { key: "cupboard", title: "Cupboard", page: "Cupboard" },
    ],
    rhs: [
      { key: "recipes", title: "Recipes", page: "Recipes" },
      { key: "overview", title: "Weekly Overview", page: "WeeklyOverview" },
    ],
  };

  const handleOnPress = (menuItem: MenuItemProps) => {
    setActiveMenu(menuItem.key);
    // @ts-ignore
    navigation.navigate(menuItem.page);
  };

  return (
    <View>
      <View style={{ marginHorizontal: 17, marginVertical: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Hi Jaime!</Text>
        <Text style={{ fontSize: 15 }}>
          Let's take a look at what's in your pantry today
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.colorBlack,
        }}
      >
        <View style={styles.menuItemsWrapper}>
          {menuItems["lhs"].map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleOnPress(item)}
              style={{
                borderBottomWidth: activeMenu === item.key ? 4 : 0,
                borderBottomColor: theme.colors.colorBlack,
                paddingBottom: 5,
              }}
            >
              <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.menuItemsWrapper}>
          {menuItems["rhs"].map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleOnPress(item)}
              style={{
                borderBottomWidth: activeMenu === item.key ? 4 : 0,
                borderBottomColor: theme.colors.colorBlack,
                paddingBottom: 5,
              }}
            >
              <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemsWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "50%",
  },
  menuItemText: {
    fontSize: 13,
  },
});

export default PantryHeader;
