const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'inline-sourcemap',
  entry: './js/client.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css'],
  },
  output: {
    path: `${__dirname}/src/`,
    filename: 'client.min.js',
  },
};
