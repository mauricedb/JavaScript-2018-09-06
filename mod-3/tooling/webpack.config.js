module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main-bundel.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
