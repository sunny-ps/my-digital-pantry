import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { theme } from "../../theme";

export type MenuItemKey =
  | "pantry"
  | "fridge"
  | "cupboard"
  | "recepies"
  | "overview";

export type MenuItemsType = {
  [key in "lhs" | "rhs"]: Array<{
    key: MenuItemKey;
    title: string;
  }>;
};

const PantryHeader = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItemKey>("pantry");

  const menuItems: MenuItemsType = {
    lhs: [
      { key: "pantry", title: "Pantry" },
      { key: "fridge", title: "Fridge" },
      { key: "cupboard", title: "Cupboard" },
    ],
    rhs: [
      { key: "recepies", title: "Recepies" },
      { key: "overview", title: "Weekly Overview" },
    ],
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
              onPress={() => setActiveMenu(item.key)}
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
              onPress={() => setActiveMenu(item.key)}
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
