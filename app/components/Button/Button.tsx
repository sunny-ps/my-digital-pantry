import { FC, ReactNode } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import type { PressableProps } from "react-native";

import { theme } from "../../theme";

interface IButtonProps extends PressableProps {
  color?: "primary" | "secondary";
  children?: ReactNode;
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
  const { color = "primary", children, style, ...buttonProps } = props;

  return (
    <Pressable
      style={Object.assign(
        {
          backgroundColor: buttonColors[color].backgroundColor,
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
        },
        style
      )}
      {...buttonProps}
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
  pressable: {},
  text: {
    textAlign: "center",
    fontSize: 19,
  },
});

export default Button;
