import { CheckBox } from "../CheckBox";

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

export const Pinned = {
  args: { size: "sm", onChange: () => {} },
};

export const Archived = {
  args: { size: "sm", onChange: () => {} },
};
