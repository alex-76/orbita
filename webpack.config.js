const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
//const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/app.js",
    "index.min": "./src/app.js"
  },
  stats: { warnings: false }, // Hide warnings
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].bundle.js",
    library : 'app'
  },
  // devServer: {
  //   overlay : true
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: "vue-style-loader!css-loader!sass-loader",
            sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  targets: {
                    browsers: [
                      "Chrome >= 52",
                      "FireFox >= 44",
                      "Safari >= 7",
                      "Explorer 11",
                      "last 4 Edge versions"
                    ]
                  },
                  useBuiltIns: true
                }
              ],
              "stage-2"
            ]
          }
        }
      },
      {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                  {
                      loader: 'css-loader',
                      options: {
                          // If you are having trouble with urls not resolving add this setting.
                          // See https://github.com/webpack-contrib/css-loader#url
                          //url: false,
                          minimize: true,
                          sourceMap: true
                      }
                  },
                  {
                      loader: 'sass-loader',
                      options: {
                          sourceMap: true
                      }
                  }
              ]
          })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  devtool: 'source-map',

  plugins: [
    //new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      throttle: "lodash.throttle"
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.bundle\.js$/,
      minimize: true,
      ecma: 8
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new ExtractTextPlugin("main.min.css")
  ]
};
