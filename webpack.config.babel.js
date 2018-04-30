import path from 'path';

export default (env = {}) => ({
  entry: './index.js',
  output: {
    path: path.resolve(path.join(__dirname, 'build')),
    filename: '[name].js'
  }
});
