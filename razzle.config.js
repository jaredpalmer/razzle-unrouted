const path = require('path');
const glob = require('glob');

module.exports = {
  modify(config, { target, dev }) {
    if (target === 'web') {
      const paths = glob.sync('./src/views/**/*.js');

      config.entry = paths.reduce((prev, curr) => {
        prev[curr.replace('./src/views/', '').replace('.js', '')] = [
          dev && require.resolve('razzle-dev-utils/webpackHotDevClient'),
          path.resolve(curr),
        ].filter(Boolean);
        return prev;
      }, {});

      config.output.filename = dev ? '[name].js' : '[name]-[hash:8].bundle.js';
    }
    return config;
  },
};
