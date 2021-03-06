const devServer = require("@neutrinojs/dev-server");
const WriteFilePlugin = require("write-file-webpack-plugin");
const FilewatcherPlugin = require("filewatcher-webpack-plugin");
const path = require("path");
const { exec } = require("child_process");
const debounce = require("lodash.debounce");

const GENERATE_CMD = "composer generate";

const runPatternlabGenerator = debounce(() => {
  exec(GENERATE_CMD, (error, stdout, stderr) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(`Error in "frontend-stack-pattern-lab": ${error}`);
      return;
    }
    // eslint-disable-next-line no-console
    console.log(stdout);
    if (stderr) {
      // eslint-disable-next-line no-console
      console.log(stderr);
    }
  });
});

module.exports = (neutrino, options = {}) => {
  const isProduction = process.env.NODE_ENV === "production";

  const defaults = {
    devServer: {
      contentBase: path.resolve("public"),
      watchContentBase: true
    },
    writeFileOptions: {
      atomicReplace: false
    },
    filWatcherOptions: {
      watchFileRegex: [
        "source/**/*.twig",
        "source/**/*.yaml",
        "source/**/*.yml",
        "source/**/*.json"
      ],
      ignored: "/node_modules/"
    }
  };

  // Merge options with defaults
  const pluginOptions = {
    ...defaults,
    ...options
  };

  // Start dev server and file watcher only when not in production
  if (!isProduction) {
    neutrino.use(devServer, pluginOptions.devServer);

    neutrino.config.plugin("FilewatcherPlugin").use(
      new FilewatcherPlugin({
        watchFileRegex: pluginOptions.filWatcherOptions.watchFileRegex,
        onReadyCallback: runPatternlabGenerator,
        onChangeCallback: runPatternlabGenerator,
        ignored: pluginOptions.filWatcherOptions.ignored
      })
    );

    neutrino.config
      .plugin("WriteFilePlugin")
      .use(new WriteFilePlugin(pluginOptions.writeFileOptions));
  }
};
