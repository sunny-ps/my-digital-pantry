import { FC } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface IInputProps {
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
}

const Input: FC<IInputProps> = ({ placeholder, label, isPassword = false }) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        secureTextEntry={isPassword}
        style={styles.input}
        placeholder={placeholder}
      />
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
