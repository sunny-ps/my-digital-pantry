import { useRef, useCallback, FC, useContext } from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { NavigationProp } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "$schema";
import { save } from "$utility";
import { userService } from "$context";

import { CustomSafeAreaView, Button, Input } from "$components";

import type { NavigationPropType } from "$types";

export interface ILoginScreenProps extends NavigationPropType {
  navigation: NavigationProp<any, any>;
}

const Login: FC<ILoginScreenProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const { setUser, user } = userService();

  const onSubmit = async (data: any) => {
    const { username, pwd } = data;
    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password: pwd }),
      });
      const data = await res.json();

      save("token", `${data.token}`);
      setUser({ token: data.token });
    } catch (err) {
      console.log(err);
    }
  };

  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
    ),
    []
  );

  return (
    <>
      <CustomSafeAreaView>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://via.placeholder.com/350x552?text=cool+picture+here",
            }}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 0.9,
            }}
          />
          <Text style={styles.titleText}>Welcome To Our App</Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            The digital pantry that let's you manage your food
          </Text>
          <Button onPress={() => navigation.navigate("CreateAccount")}>
            Create an account
          </Button>
          <Button
            color="secondary"
            onPress={() => bottomSheetRef.current?.expand()}
          >
            Log in
          </Button>
        </View>
      </CustomSafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={[400]}
        backdropComponent={renderBackdrop}
        handleComponent={null}
        style={{
          borderWidth: 1,
          borderColor: "#C9C9C9",
        }}
      >
        <View style={styles.bottomSheet}>
          <Text style={styles.titleText}>Welcome to Our App</Text>
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
                label="Password"
                onChange={onChange}
                value={value}
                error={errors.pwd ? true : false}
                errorMessage={errors.pwd && errors.pwd.message?.toString()}
              />
            )}
            name="pwd"
          />
          <Button onPress={handleSubmit(onSubmit)}>Log in</Button>
          <Text
            style={{ textAlign: "center", textDecorationLine: "underline" }}
          >
            Forgot password?
          </Text>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 40,
    height: "100%",
    justifyContent: "space-evenly",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 33.18,
  },
  bottomSheetBackdrop: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    flex: 1,
    zIndex: 5,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
});

export default Login;
