const glob = require('glob');
const path = require('path');
const BuildHash = '🚴‍♂️' + (process.env.npm_package_version || '').replace('.', '-');

const componentFiles = (() => {
  const components = glob.sync('components/**/[A-Z]*/index.js', { cwd: path.resolve('./src') });

  return components.reduce((acc, component) => {
    component = component.replace(/\/index.js$/, '');
    acc[component] = `./src/${component}`;
    return acc;
  }, {});
})();

module.exports = {
  filenameHashing: false,
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: `v${BuildHash}_[name]_[hash]`
        },
      }
    },
  },
  configureWebpack: {
    entry: {
      ...componentFiles,
    },
  }
};