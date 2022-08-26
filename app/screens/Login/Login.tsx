import { useRef, useCallback, FC } from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { NavigationProp } from "@react-navigation/native";

import { Button, Input } from "$components";

import type { NavigationPropType } from "$types";

interface ILoginScreenProps extends NavigationPropType {
  navigation: NavigationProp<any, any>;
}

const Login: FC<ILoginScreenProps> = ({ navigation }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
    ),
    []
  );
  return (
    <>
      <SafeAreaView>
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
      </SafeAreaView>

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
        <View style={styles.popup}>
          <Text style={styles.titleText}>Welcome to Our App</Text>
          <Input label="Email" placeholder="example@email.com" />

          <Input label="Password" placeholder="*********" isPassword />
          <Button>Log in</Button>
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
    paddingTop: 10,
    paddingBottom: 40,
    height: "100%",
    justifyContent: "space-evenly",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 33.18,
  },
  popupBackdrop: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
  },
  popup: {
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
