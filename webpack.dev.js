const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/page-index/main.js',
    project: './src/page-project/main.js',
    task: './src/page-task/main.js',
    editProject: './src/edit-project/main.js',
    newProject: './src/new-project/main.js',
    newTask: './src/new-task/main.js',
    test: './src/confirm-dialog/main.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 3000,
    writeToDisk: false, // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
    historyApiFallback: {
      index: './src/utils/404.html'
    }
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
          // Please note we are not running postcss here
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: '[path][name].[ext]?hash=[hash:20]',
              esModule: false,
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page-index/tmpl.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-project/tmpl.html',
      inject: true,
      chunks: ['project'],
      filename: 'project.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-task/tmpl.html',
      inject: true,
      chunks: ['task'],
      filename: 'task.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new-project/tmpl.html',
      inject: true,
      chunks: ['newProject'],
      filename: 'newProject.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/edit-project/tmpl.html',
      inject: true,
      chunks: ['editProject'],
      filename: 'editProject.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new-task/tmpl.html',
      inject: true,
      chunks: ['newTask'],
      filename: 'newTask.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/confirm-dialog/tmpl.html',
      inject: true,
      chunks: ['test'],
      filename: 'test.html'
    }),
  ]
}
