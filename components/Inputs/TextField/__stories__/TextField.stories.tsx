import { TextField } from "../TextField";

export default {
  title: "Inputs/TextField",
  component: TextField,
  argTypes: {
    onPinInput: { action: "onPinInput" },
    onArchiveInput: { action: "onArchiveInput" },
  },
};

export const Default = {
  args: {},
};

export const Pinned = {
  args: {},
};

export const Archived = {
  args: {},
};
