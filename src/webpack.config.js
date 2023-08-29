const path = require('path');

module.exports = {
  entry: './src/index.js', // Stien til din hovedindgangsfil
  output: {
    filename: 'bundle.js', // Navnet på den resulterende bundle-fil
    path: path.resolve(__dirname, 'dist'), // Stien til output-mappen
  },
  module: {
    rules: [
      // Her tilføjer du dine regler for loaders
      {
        test: /mapbox-gl-csp-worker\.js$/, // Juster filnavnet efter behov
        use: { loader: 'worker-loader' },
      },
      // ... andre loader-regler ...
    ],
  },
  // ... andre konfigurationsindstillinger ...
};
