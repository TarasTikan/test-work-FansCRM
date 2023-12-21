module.exports = {
  // ...
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  eslint: {
    enable: true,
    mode: "extends",
    configure: (eslintConfig, { env, paths }) => {
      eslintConfig.extends.push("plugin:prettier/recommended");
      return eslintConfig;
    },
    pluginOptions: (eslintPluginOptions, { env, paths }) => {
      return eslintPluginOptions;
    },
  },
};
