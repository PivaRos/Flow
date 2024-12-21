import CheckBox from "../CheckBox";

export default {
  title: "Inputs/CheckBox",
  component: CheckBox,
  argTypes: {
    onPinInput: { action: "onPinInput" },
    onArchiveInput: { action: "onArchiveInput" },
  },
};

export const Default = {
  args: {
    size: "sm",
    onChange: () => {},
  },
};
