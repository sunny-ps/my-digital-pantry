import { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { CustomSafeAreaView, Button, Input } from "$components";

import type { NavigationPropType } from "$types";

interface ICreateAccountScreenProps extends NavigationPropType {}

const NavBar: FC<ICreateAccountScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Pressable
        style={styles.navBackButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={32} color="black" activeOpacity={0} />
      </Pressable>
    </View>
  );
};

const CreateAccount: FC<ICreateAccountScreenProps> = ({ navigation }) => {
  return (
    <CustomSafeAreaView style={{ flex: 1 }}>
      <NavBar navigation={navigation} />
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 5 }}>
            Create a new account
          </Text>
          <Text>Sign up in a couple of minutes</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Input label="Name" placeholder="Jamie" />
          <Input label="Username" placeholder="jamie1999" />
          <Input label="Email" placeholder="example@email.com" />
          <Input label="Password" placeholder="********" />
        </View>
        <Button>Continue</Button>
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  navBackButton: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  inputWrapper: {
    minHeight: "55%",
    justifyContent: "space-evenly",
  },
});

export default CreateAccount;
