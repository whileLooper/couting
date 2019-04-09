const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

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
  addWebpackAlias({
    Component: PATHS.components,
    Services: PATHS.services,
  }),
);
