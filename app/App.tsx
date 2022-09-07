import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { userService, UserDataProvider } from "$context";
import { Login, CreateAccount, Pantry, Recipes } from "$screens";

const Stack = createNativeStackNavigator();

const App = () => {
  const { user } = userService();
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user.token ? (
              <>
                <Stack.Screen name="Pantry" component={Pantry} />
                <Stack.Screen name="Recipes" component={Recipes} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
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
