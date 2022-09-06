import { FC } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import type { TextInputProps } from "react-native";

interface IInputProps extends TextInputProps {
  placeholder?: string;
  label?: string;
}

const Input: FC<IInputProps> = (props) => {
  const { label, ...textInputProps } = props;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  // TODO: shared border radius for input and button
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 18,
    paddingRight: 18,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 19.2,
  },
});

export default Input;
