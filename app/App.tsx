// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import { UserContext } from "./context/user";
// import { AppBar } from "$components";
import { Login, CreateAccount, Home } from "$screens";
import { User } from "$types";

const Stack = createNativeStackNavigator();
const App = () => {
  const [user, setUser] = useState<User>({});
  const signedIn = true;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user.token ? (
              <>
                <Stack.Screen name="Home" component={Home} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default registerRootComponent(App);
