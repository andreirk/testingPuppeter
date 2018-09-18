const path = require('path');
const webpack = require('webpack');
/* eslint-disable */
module.exports = function (env) {
  const pack = require('./package.json');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

  const production = !!(env && env.production === 'true');
  const asmodule = !!(env && env.module === 'true');
  const standalone = !!(env && env.standalone === 'true');

  const babelSettings = {
    extends: path.join(__dirname, '/.babelrc'),
  };

  const config = {
    entry: './sources/myapp.js',
    output: {
      path: path.join(__dirname, 'codebase'),
      publicPath: '/codebase/',
      filename: 'myapp.js',
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: `babel-loader?${JSON.stringify(babelSettings)}`,
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          loader: 'url-loader?limit=25000',
        },
        //   {
        //       // here we will match all excluded plugins' ASSETS from above rule
        //       // for resolving url() and @font-face from 3rd party libs and plugins
        //       test: /\.(woff(2)?|ttf|otf|eot|png|jpg|gif|ico)$/,
        //       exclude: [
        //           path.resolve(__dirname, './fonts'), //don't match project's fonts
        //       ],
        //       loader: 'url-loader',
        //       options: {
        //           name: '[name].[ext]',
        //           outputPath: '/plugin_fonts/',
        //           limit: 1, // pass all options above to file-loader
        //       }
        //   },
          {
              test: [
                  /\.(woff(2)?|ttf|otf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/
              ],
              // exclude: [
              //     path.resolve(__dirname, './../assets/plugins')
              // ],
              loader: 'file-loader',
              options: {
                  outputPath: '/fonts/',
                  name: '[name].[ext]'
              }
          },

        {
          test: /\.(less|css)$/,
          loader: ExtractTextPlugin.extract('css-loader!less-loader'),
        },
      ],
    },
    devServer: {
      inline:true,
      port: 8008
    },
    resolve: {
      extensions: ['.js'],
      modules: ['./sources', 'node_modules'],
      alias: {
        'jet-views': path.resolve(__dirname, 'sources/views'),
        'jet-locales': path.resolve(__dirname, 'sources/locales'),
      },
    },
    plugins: [
      new ExtractTextPlugin('./myapp.css'),
      new webpack.DefinePlugin({
        VERSION: `"${pack.version}"`,
        APPNAME: `"${pack.name}"`,
        PRODUCTION: production,
        BUILD_AS_MODULE: (asmodule || standalone),
      }),
    ],
  };

  if (production) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      test: /\.js$/,
    }));
  }

  if (asmodule) {
    if (!standalone) {
      config.externals = config.externals || {};
      config.externals = ['webix-jet'];
    }

    const out = config.output;
    const sub = standalone ? 'full' : 'module';

    out.library = pack.name.replace(/[^a-z0-9]/gi, '');
    out.libraryTarget = 'umd';
    out.path = path.join(__dirname, 'dist', sub);
    out.publicPath = `/dist/${sub}/`;
  }

  return config;
};
/* eslint-enable */

