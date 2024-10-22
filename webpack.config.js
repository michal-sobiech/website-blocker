const path = require('path');

module.exports = {
  entry: {
	'content-script': './dist/block-websites.js',
	'background': './dist/background.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  optimization: {
    minimize: false 
  }
};

