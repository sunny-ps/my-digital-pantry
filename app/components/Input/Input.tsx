import { FC } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import type { TextInputProps } from "react-native";

interface IInputProps extends TextInputProps {
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
  onChange: (...event: any[]) => void;
  value: string;
  error: boolean;
  errorMessage?: string;
}

const Input: FC<IInputProps> = ({
  placeholder,
  label,
  isPassword = false,
  value,
  onChange,
  error,
  errorMessage,
}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        secureTextEntry={isPassword}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
      {error && <Text style={styles.errorText}>{errorMessage}</Text>}
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
  errorText: {
    marginTop: 4,
    fontSize: 14,
    color: "red",
  },
});

export default Input;
