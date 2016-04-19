var webpack = require('webpack');
module.exports = {
    // entry指定打包的入口文件 每个键值对就是一个入口文件
    entry: [
      'webpack/hot/only-dev-server',
      "./js/index.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
