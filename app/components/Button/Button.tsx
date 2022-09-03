import { FC, ReactNode } from "react";
import { Pressable, Text, StyleSheet, PressableProps } from "react-native";

import { theme } from "../../theme";

interface IButtonProps extends PressableProps {
  color?: "primary" | "secondary";
  children?: ReactNode;
  onPress?: () => void;
}

const buttonColors = {
  primary: {
    backgroundColor: theme.colors.colorBlack,
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#808080",
    color: "#fff",
  },
};

const Button: FC<IButtonProps> = (props) => {
  const { color = "primary", children, onPress, ..._props } = props;

  return (
    <Pressable
      style={Object.assign(
        { backgroundColor: buttonColors[color].backgroundColor },
        styles.pressable
      )}
      {..._props}
      onPress={onPress}
    >
      <Text
        style={Object.assign({ color: buttonColors[color].color }, styles.text)}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 90,
    paddingLeft: 90,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 19,
  },
});

export default Button;
