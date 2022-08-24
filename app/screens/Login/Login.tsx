import { View, Image, Text, SafeAreaView } from "react-native";

import Button from "$components/Button/Button";

const Login = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingBottom: 40,
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
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
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 33.18,
          }}
        >
          Welcome To Our App
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          The digital pantry that let's you manage your food
        </Text>
        <Button>Create an account</Button>
        <Button color="secondary">Log in</Button>
      </View>
      <View style={{ borderRadius: 20, backgroundColor: "red" }}></View>
    </SafeAreaView>
  );
};

export default Login;
