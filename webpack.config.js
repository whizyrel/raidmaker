const path = require('path');

const defaultConfig = {
  target: "node",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "raidmaker.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: 'raidmaker',
      type: 'umd'
    }
  },
  optimization: {
    concatenateModules: true,
    minimize: false,
  },
  devtool: "eval",
  node: {
    global: true,
    __filename: false,
    __dirname: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

module.exports = [
  {
    name: "development",
    mode: "development",
    watch: true,
    watchOptions: {
      ignored: ["node_modules/", "tests/", "dist/", "README.md"],
    },
    stats: {
      errorDetails: true,
    },
    ...defaultConfig,
  },
  {
    name: "production",
    mode: "production",
    watch: false,
    ...defaultConfig,
  },
];
