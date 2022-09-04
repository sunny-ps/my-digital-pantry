module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            $components: "./app/components",
            $screens: "./app/screens",
            $types: "./app/types",
            $schema: "./app/schema",
            $utility: "./app/utility",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
