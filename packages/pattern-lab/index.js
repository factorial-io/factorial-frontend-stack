const devServer = require("@neutrinojs/dev-server");
const WriteFilePlugin = require("write-file-webpack-plugin");
const path = require("path");

module.exports = (neutrino, options = {}) => {
  const defaults = {
    contentBase: path.resolve("public"),
    watchContentBase: true
  }

  // Merge options with defaults
  const pluginOptions = {
    ...defaults,
    ...options,
  };

  neutrino.use(devServer, pluginOptions);

  neutrino.config.plugin("WriteFilePlugin").use(new WriteFilePlugin({
    // Prevents patternlab watcher from crashing because of partial files.
    atomicReplace: false,
  }));
};
