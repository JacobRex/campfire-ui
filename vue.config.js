const glob = require('glob');
const path = require('path');
const { resolve } = require('path');
const rootDir = process.cwd();

const componentFiles = (() => {
  const components = glob.sync('components/**/[A-Z]*/index.js', { cwd: path.resolve('./src') });

  return components.reduce((acc, component) => {
    component = component.replace(/\/index.js$/, '');
    acc[component] = `./src/${component}`;
    return acc;
  }, {});
})();

module.exports = {
  css: {
    extract: false,
  },
  filenameHashing: false,
  configureWebpack: {
    entry: {
      ...componentFiles,
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@campfire-ui': resolve(rootDir, 'src'),
      },
    },
    
  }
};