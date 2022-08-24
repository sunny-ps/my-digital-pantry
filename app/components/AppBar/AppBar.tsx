import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const AppBar = () => {
  return (
    <View style={styles.wrapper}>
      <Entypo.Button
        name="menu"
        size={24}
        color="white"
        backgroundColor="transparent"
        style={{ height: 34 }}
      />
      <Text style={styles.titleText}>Hi there</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    width: "100%",
    backgroundColor: "cornflowerblue",
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default AppBar;
