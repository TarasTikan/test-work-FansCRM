import { CosmiconfigResult } from 'cosmiconfig/dist/types';
import { Linter } from "eslint";

interface EslintConfigContext {
  env: string;
  paths: string[];
}

interface EslintPluginOptionsContext {
  env: string;
  paths: string[];
}

interface CracoConfig {
  typescript: {
    enableTypeChecking: boolean 
  };
  eslint?: {
    enable: boolean;
    mode?: "extends" | "file";
    configure?: (
      eslintConfig: Linter.Config,
      context: EslintConfigContext
    ) => Linter.Config;
    pluginOptions?: (
      eslintPluginOptions: Linter.Config,
      context: EslintPluginOptionsContext
    ) => Linter.Config;
  };
}

const config: CracoConfig = {
    typescript: {
    enableTypeChecking: true 
  },
  eslint: {
    enable: true,
    mode: 'extends',
    configure: (eslintConfig, { env, paths }) => {
      return eslintConfig;
    },
    pluginOptions: (eslintPluginOptions, { env, paths }) => {
      return eslintPluginOptions;
    },
  },
};

export default config;
