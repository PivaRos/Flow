import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { createGetSizeStyles } from "../../../utils/styles";
import Style from "./__styles__";
import { Size } from "./CheckBox.types";

interface CheckBoxProps {
  onChange: (checked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  size?: Size;
}

const getSizeStyles = createGetSizeStyles({
  sm: require("./__styles__/sm").default,
  md: require("./__styles__/md").default,
  lg: require("./__styles__/lg").default,
});

export const CheckBox = ({
  onChange,
  checked,
  defaultChecked = false,
  size = "sm",
}: CheckBoxProps) => {
  const styles = getSizeStyles<Style>(size);
  const [_checked, _setChecked] = useState(
    checked !== undefined ? checked : defaultChecked
  );

  useEffect(() => {
    if (checked !== undefined) {
      _setChecked(checked);
    }
  }, [checked]);

  useEffect(() => {
    //* notify the user for change only if the change did not get though him
    if (checked !== undefined) {
      onChange(_checked);
    }
  }, [_checked]);

  const handlePress = () => {
    _setChecked((old) => !old);
  };

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={handlePress}>
      <View></View>
    </TouchableWithoutFeedback>
  );
};
