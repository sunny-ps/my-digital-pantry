import { FC, useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "$components";
import { createAccountSchema } from "$schema";
import type { NavigationPropType } from "$types";
import { save } from "$utility";
import { UserContext } from "../../context/index";

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
  const userService = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createAccountSchema) });
  const onSubmit = async (data: any) => {
    const { username, email, pwd } = data;
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password: pwd }),
      });
      const data = await res.json();
      save("token", `${data.token}`);
      userService.setUser({ token: data.token });
    } catch (err) {
      console.log(err);
    }
  };

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
              <Input
                label="Username"
                onChange={onChange}
                value={value}
                error={errors.username ? true : false}
                errorMessage={
                  errors.username && errors.username.message?.toString()
                }
              />
            )}
            name="username"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email"
                onChange={onChange}
                value={value}
                error={errors.email ? true : false}
                errorMessage={errors.email && errors.email.message?.toString()}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Password"
                onChange={onChange}
                value={value}
                error={errors.pwd ? true : false}
                errorMessage={errors.pwd && errors.pwd.message?.toString()}
              />
            )}
            name="pwd"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Confirm Password"
                onChange={onChange}
                value={value}
                error={errors.pwd2 ? true : false}
                errorMessage={errors.pwd2 && errors.pwd2.message?.toString()}
              />
            )}
            name="pwd2"
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
