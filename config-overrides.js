const path = require('path');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const PATHS = {
  app: path.resolve(__dirname, './src/index.js'),
  build: path.join(__dirname, './dist'),
  components: path.resolve(__dirname, './src/components'),
  services: path.resolve(__dirname, './src/services'),
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: (config, env) => {
    // ...add your webpack config
    config.resolve =  {
      extensions: ['.js', '.jsx'],
      alias: {
        Component: PATHS.components,
        Services: PATHS.services,
      }
    };
    return config;
  },
}
