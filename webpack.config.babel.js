import path from 'path';

export default (env = {}) => ({
  entry: './index.js',
  output: {
    path: path.resolve(path.join(__dirname, 'build')),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env']]
            }
          }
        ]
      }
    ]
  }
});
