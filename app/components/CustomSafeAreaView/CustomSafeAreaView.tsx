import { memo, FC, ReactNode } from "react";
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ViewStyle,
  StyleProp,
} from "react-native";

interface ICustomSafeAreaViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

/**
 * Screen Wrapper to apply padding space on status bar
 */
const CustomSafeAreaView: FC<ICustomSafeAreaViewProps> = (props) => {
  if (Platform.OS === "ios") {
    return <SafeAreaView style={props.style}>{props.children}</SafeAreaView>;
  }

  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = {
  container: {
    paddingTop: StatusBar.currentHeight,
  },
};

export default memo(CustomSafeAreaView);
