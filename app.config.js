export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "react-native-flow",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
