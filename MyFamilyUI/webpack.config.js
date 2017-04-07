var path = require('path');
module.exports = {
    context: path.join(__dirname, 'app'),
    entry:"./app",
    output: {
        path: path.join(__dirname, 'js'),
        devtoolLineToLine: true,
        sourceMapFilename: "./js/app.bundle.js.map",
        pathinfo:true,
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.scss', '.html', '.css', '.webpack.js', '.web.js']
    },
    module: {
        loaders: [
          {
              test: /.tsx$/,
              loader: 'ts-loader'
          },
          {
              test: /\.ts$/,
              loader: 'ts-loader',
              exclude: /(node_modules)/,
              enforce:'pre'
          },
          {
              test: /\.less$/,
              loader:"style!css!less"
          },
          {
              test: /\.html$/,
              loader:["html-loader"]
          },
          {
              test: /\.css/,
              loader:"style!css"
          },
          {
              test: /\.(gif|png|jpe?g)$/,
              loader:'url?limit=8192'
          },
          {
              test: /\.wiff(2)?/,
              loader:'url?limit=10000&mimtype=application/font-woff'
          },
          {
              test: /\.(ttf|eof|svg)/,
              loader:'file'
          }
        ]
    },
    plugins: [
     //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ],
    devtool: "source-map",
    devServer: {
        //watch: true,
        inline: true,
        port:83
    }
};