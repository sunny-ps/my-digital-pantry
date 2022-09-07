import { FC } from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { theme } from "../../theme";

export interface IPillProps extends TouchableOpacityProps {
  isActive?: boolean;
  isDisabled?: boolean;
  label: string;
  labelStyle?: TextStyle;
}

const Pill: FC<IPillProps> = (props) => {
  const {
    isActive,
    isDisabled,
    label,
    labelStyle,
    style,
    ...touchableOpacityProps
  } = props;
  return (
    <TouchableOpacity
      style={Object.assign(
        {
          borderColor: "#000",
          borderRadius: 100,
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: isDisabled
            ? theme.colors.colorGrey
            : isActive
            ? theme.colors.colorBlack
            : theme.colors.colorWhite,
          borderWidth: isDisabled ? 0 : 1,
        },
        style
      )}
      {...touchableOpacityProps}
    >
      <Text
        style={Object.assign(
          {
            textAlign: "center",
            color: isActive ? theme.colors.colorWhite : theme.colors.colorBlack,
          },
          labelStyle
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Pill;
