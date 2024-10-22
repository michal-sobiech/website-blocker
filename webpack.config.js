const path = require('path');

module.exports = {
  entry: './dist/block-websites.js',  // Twój główny plik
  output: {
    filename: 'content-script.bundle.js',  // Wynikowy połączony plik
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
};

