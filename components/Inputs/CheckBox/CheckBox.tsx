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
  disabled?: boolean;
  value: string;
}

const getSizeStyles = createGetSizeStyles({
  sm: require("./__styles__/sm").default,
  md: require("./__styles__/md").default,
  lg: require("./__styles__/lg").default,
});

const CheckBox = ({
  onChange,
  checked,
  defaultChecked = false,
  size = "sm",
  value,
  disabled,
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
    onChange(_checked);
  }, [_checked]);

  const handlePress = () => {
    if (!disabled) _setChecked((old) => !old);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}></View>
    </TouchableWithoutFeedback>
  );
};

export default CheckBox;
