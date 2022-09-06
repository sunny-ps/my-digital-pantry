import { useState } from "react";
import { View, Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Pill } from "../Pill";

import { theme } from "../../theme";

const QuickAdd = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View
      style={{
        position: "absolute",
        bottom: 10,
        right: 10,
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <View
        style={{
          display: showMenu ? "flex" : "none",
          height: 110,
          justifyContent: "space-around",
          alignItems: "flex-end",
          marginBottom: 8,
        }}
      >
        {["scan barcode", "search item", "add manaully"].map((item) => (
          <Pill
            style={{
              borderColor: "#000",
              backgroundColor: theme.colors.colorGrey,
            }}
            labelStyle={{ fontSize: 15 }}
            label={item}
            key={item}
          />
        ))}
      </View>
      <Pressable
        style={{
          backgroundColor: theme.colors.colorGrey,
          height: 70,
          width: 70,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setShowMenu((prevState) => !prevState)}
      >
        <AntDesign
          name="plus"
          size={30}
          color="black"
          style={{
            transform: showMenu ? [{ rotateZ: "45deg" }] : [],
          }}
        />
      </Pressable>
    </View>
  );
};

export default QuickAdd;
