import { useEffect, useState, useRef } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { differenceInDays } from "date-fns";

import {
  Pill,
  Button,
  QuickAdd,
  ProductCard,
  PantryHeader,
  CustomSafeAreaView,
} from "$components";

import type { ItemProps } from "$types";

import pantryData from "../../mockData/pantryData";

export type Filter = "all" | "current" | "expired";

const filters: Array<{ id: number; label: Filter }> = [
  { id: 1, label: "all" },
  { id: 2, label: "current" },
  { id: 3, label: "expired" },
];

/**
 * Transform the pantry data by adding the item status (EXPIRED or EXPIRING SOON and sort the add
 * by showing EXPIRED first and then the EXPIRING SOON)
 * @params data: Array contain the pantry items
 * @returns updated array
 */
const updatePantryData = (data: Array<ItemProps>) => {
  const updatedPantryData = data.map((item) => ({
    ...item,
    status:
      differenceInDays(new Date(), item.expiry!!) < 0
        ? "EXPIRED"
        : "EXPIRING SOON",
  }));
  // pantry data sorted from EXPIRED -> EXPIRING SOON
  const sortedPantryData = updatedPantryData.sort((a, b) => {
    const statusA = a.status === "EXPIRED" ? 1 : 0;
    const statusB = b.status === "EXPIRED" ? 1 : 0;

    return statusB - statusA;
  });

  return sortedPantryData;
};

const Pantry = () => {
  const pantryItems = updatePantryData(pantryData);

  const [activeFilter, setActiveFilter] = useState(filters[0]);
  // list of items based on what what filter is active
  const [filteredItem, setFilteredItems] = useState(pantryItems);

  // edit menu selected items
  const [selectedItems, setSelectedItems] = useState<Array<ItemProps> | []>([]);
  const [editable, setEditable] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    switch (activeFilter.label) {
      case "current":
        setFilteredItems(
          pantryItems.filter((item) => item.status !== "EXPIRED")
        );
        break;

      case "expired":
        setFilteredItems(
          pantryItems.filter((item) => item.status === "EXPIRED")
        );
        break;

      case "all":
        setFilteredItems(pantryItems);
        break;
    }
  }, [activeFilter]);

  useEffect(() => {
    editable && selectedItems.length !== 0
      ? bottomSheetRef.current?.expand()
      : bottomSheetRef.current?.close();
  }, [selectedItems]);

  return (
    <>
      <CustomSafeAreaView>
        <PantryHeader />
        <View style={styles.wrapper}>
          <View style={styles.filterContainer}>
            <View
              style={{
                flexDirection: "row",
                width: 220,
                justifyContent: "space-between",
              }}
            >
              {filters.map((filter) => (
                <Pill
                  key={filter.id}
                  label={filter.label}
                  onPress={() => setActiveFilter(filter)}
                  isActive={filter.id === activeFilter.id}
                />
              ))}
            </View>
            <Pill
              label="edit"
              onPress={() => setEditable((prevState) => !prevState)}
              isActive={editable}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 10, marginBottom: 14 }}>
              {activeFilter.label === "expired" ? (
                <>
                  <View style={styles.itemsHeaderWrapper}>
                    <Text style={styles.itemsHeaderText}>Expired Items </Text>
                    <Text>/ 2 items</Text>
                  </View>
                  <Text>
                    Don't throw these away just yet! Let's see what we can do
                    with these items
                  </Text>
                </>
              ) : activeFilter.label === "current" ? (
                <View style={styles.itemsHeaderWrapper}>
                  <Text style={styles.itemsHeaderText}>Current Items </Text>
                  <Text>/ 2 items</Text>
                </View>
              ) : (
                <View style={styles.itemsHeaderWrapper}>
                  <Text style={styles.itemsHeaderText}>All Items </Text>
                  <Text>/ 2 items</Text>
                </View>
              )}
            </View>

            <View style={styles.itemsContainer}>
              {filteredItem.map((item) => (
                <ProductCard
                  id={item.id}
                  name={item.name}
                  measure={item.measure}
                  status={item.status}
                  image="https://via.placeholder.com/111x100?text=cool+picture+here"
                  key={item.id}
                  isEditable={editable}
                  setSelectedItems={setSelectedItems}
                />
              ))}
            </View>
          </ScrollView>
          <QuickAdd />
        </View>
      </CustomSafeAreaView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={[150]}
        handleComponent={null}
        style={{
          borderWidth: 1,
          borderColor: "#C9C9C9",
        }}
      >
        <View style={styles.bottomSheet}>
          <Button>Find a Recepie</Button>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button color="secondary" style={{ width: "48%" }}>
              Move
            </Button>
            <Button color="secondary" style={{ width: "48%" }}>
              Remove
            </Button>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 17,
  },
  filterContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  itemsHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemsHeaderText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  bottomSheet: {
    flex: 1,
    zIndex: 5,
    width: "100%",
    paddingHorizontal: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
});

export default Pantry;
