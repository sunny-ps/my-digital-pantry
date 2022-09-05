import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import { userService, UserDataProvider } from "$context";
import { Login, CreateAccount, Home } from "$screens";

const Stack = createNativeStackNavigator();
const App = () => {
  const { user } = userService();
  return (
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
  );
};
const AppWrapper = () => (
  <UserDataProvider>
    <App />
  </UserDataProvider>
);
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default registerRootComponent(AppWrapper);
