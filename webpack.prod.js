const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const buildPath = path.resolve(__dirname, 'docs');

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/pages/home/main.js',
    project: './src/pages/project/main.js',
    task: './src/pages/task/main.js',
    editProject: './src/pages/edit-project/main.js',
    newProject: './src/pages/new-project/main.js',
    newTask: './src/pages/new-task/main.js',
  },

  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: '[name].[hash:20].js',
    path: buildPath,
  },

  // https://medium.com/groww-engineering/module-aliasing-in-webpack-f02fe1b91f94
  resolve: {
    alias: {
      css: path.resolve(__dirname, 'src/css/'),
      img: path.resolve(__dirname, 'src/img'),
      model: path.resolve(__dirname, 'src/js/Model'),
      storage: path.resolve(__dirname, 'src/js/Storage'),
      view: path.resolve(__dirname, 'src/js/View'),
    },
    extensions: ['.js', '.css'],
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[hash:20].[ext]',
              esModule: false,
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(), // cleans output.path by default
    new HtmlWebpackPlugin({
      template: './src/pages/home/tmpl.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/project/tmpl.html',
      inject: true,
      chunks: ['project'],
      filename: 'project.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/task/tmpl.html',
      inject: true,
      chunks: ['task'],
      filename: 'task.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/new-project/tmpl.html',
      inject: true,
      chunks: ['newProject'],
      filename: 'newProject.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/edit-project/tmpl.html',
      inject: true,
      chunks: ['editProject'],
      filename: 'editProject.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/new-task/tmpl.html',
      inject: true,
      chunks: ['newTask'],
      filename: 'newTask.html',
    }),
  ],

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    checkWasmTypes: true,
    chunkIds: false,
    concatenateModules: true,
    flagIncludedChunks: true,
    nodeEnv: 'production',
    sideEffects: true,
    usedExports: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    },
    noEmitOnErrors: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  performance: {
    hints: 'warning',
  },
};
