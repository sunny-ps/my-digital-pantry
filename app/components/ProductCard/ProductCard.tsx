import { useState, useEffect, FC, SetStateAction, Dispatch } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Pill } from "../Pill";

import type { ItemProps } from "$types";
import { theme } from "../../theme";

// TODO: change types of measure and expiry
export interface IProductCardProps extends ItemProps {
  isEditable?: boolean;
  setSelectedItems?: Dispatch<SetStateAction<Array<ItemProps> | []>>;
}

const ProductCard: FC<IProductCardProps> = ({
  id,
  itemName,
  itemImage,
  itemMeasure,
  status,
  isEditable,
  setSelectedItems,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (!isEditable) setIsSelected(false);
  }, [isEditable]);

  // dyanmically add items that have been selected by the user to the selected list from the parent
  // which will allow us to display the bottom sheet based on whats selected
  useEffect(() => {
    if (isSelected)
      setSelectedItems!((prevState) => [
        ...prevState,
        { id, itemName, itemMeasure, itemImage } as ItemProps,
      ]);

    if (!isSelected) {
      setSelectedItems!((prevState) =>
        prevState.filter((item) => item.id !== id)
      );
    }
  }, [isSelected]);

  return (
    <View style={styles.container}>
      {isEditable && (
        <View
          style={{
            width: "102%",
            top: -5,
            right: 1,
            position: "absolute",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            zIndex: 5,
          }}
        >
          <TouchableOpacity
            style={{
              height: 19,
              width: 19,
              borderWidth: 1,
              borderColor: theme.colors.colorBlack,
              backgroundColor: theme.colors.colorWhite,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setIsSelected((prevState) => !prevState)}
          >
            {isSelected && (
              <View
                style={{
                  backgroundColor: theme.colors.colorBlack,
                  height: 19 - 5,
                  width: 19 - 5,
                }}
              ></View>
            )}
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: theme.colors.colorGrey2,
              height: 24,
              width: 24,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="close" size={20} color="black" />
          </View>
        </View>
      )}

      <View style={styles.itemCardWrapper}>
        <Text style={styles.itemNameText}>{itemName}</Text>
        <Image
          source={{
            uri: itemImage,
          }}
          style={{
            width: 119,
            height: 100,
          }}
        />
        <Text>{itemMeasure}</Text>
        <Pill isDisabled label={status} />
      </View>
    </View>
  );
};

// TODO: item name text wrap
const styles = StyleSheet.create({
  container: {
    width: "49%",
    height: 230,
    paddingHorizontal: 3,
    marginBottom: 15,
  },
  itemCardWrapper: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderColor: theme.colors.colorBlack,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 13,
  },
  itemNameText: {
    fontWeight: "bold",
    fontSize: 19.2,
  },
});

export default ProductCard;
