const { override, fixBabelImports,addLessLoader } = require("customize-cra");
var path = require("path");
const tsImportPluginFactory = require("ts-import-plugin");

// 配置相对路径 @ 表示
let configAlias = function(config,env){
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@constants": path.resolve(__dirname,  "src", "constants"),
    "@componnets": path.resolve(__dirname,  "src", "componnets"),
    "@layouts": path.resolve(__dirname, "src", "layout"),
    "@utils": path.resolve(__dirname,  "src", "utils"),
    "@routes": path.resolve(__dirname,  "src", "routes"),
    "@asset": path.resolve(__dirname,  "src", "asset"),
    "@commonStyles": path.resolve(__dirname,  "src", "commonStyles"),
    "@models": path.resolve(__dirname,  "src", "models"),
    "@services": path.resolve(__dirname,  "src", "services"),
    "@systemPages": path.resolve(__dirname,  "src", "systemPages"),
    "@common": path.resolve(__dirname,"src","common")
  })
  if ('production' === config.mode) {
    config.output.publicPath = './';
    config.devtool='none'
  }
  return config;
}
let configTSXLoader = function(config, env) {
  // config.resolve.extensions = [".tsx", ".ts", ".js", ".jsx"];
  let loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;   
    loaders.unshift({
      test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory([
              {
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: 'css'
              }
            ])]
          }),
        }
    });
  return config;
};
// 配置less
let configLessLoader = function(config,env){
  let  loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    loaders.unshift(
    {
      test: /\.less$/,
      exclude: [/node_modules/],
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
            localIdentName:"[name]__[local]___[hash:base64:5]"
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', 
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        }
      ],
    },
  )
  return config;
}

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  }),
  configAlias,
  configTSXLoader,
  configLessLoader
);
