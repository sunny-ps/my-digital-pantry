import { useRef, useCallback, FC } from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";

import { NavigationProp } from "@react-navigation/native";

import { Button, Input } from "$components";

import type { NavigationPropType } from "$types";

interface IHomeScreenProps extends NavigationPropType {
  navigation: NavigationProp<any, any>;
}

const Home: FC<IHomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Hey congrats you logged in</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
