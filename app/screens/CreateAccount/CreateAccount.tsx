import { FC } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";

import { Button, Input } from "$components";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.headingWrapper}>
          <Text style={{ fontSize: 28, marginBottom: 5 }}>
            Create a new account
          </Text>
          <Text>Sign up in a couple of minutes</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input label="Name" onChange={onChange} value={value} />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input label="Username" onChange={onChange} value={value} />
            )}
            name="username"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input label="Email" onChange={onChange} value={value} />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input label="Password" onChange={onChange} value={value} />
            )}
            name="password"
          />
          <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navBackButton: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  headingWrapper: {
    marginBottom: 16,
  },
  inputWrapper: {
    height: 440,
    justifyContent: "space-evenly",
  },
});

export default CreateAccount;
