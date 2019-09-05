const devServer = require("@neutrinojs/dev-server");
const WriteFilePlugin = require("write-file-webpack-plugin");
const FilewatcherPlugin = require("filewatcher-webpack-plugin");
const path = require("path");
const { exec } = require("child_process");
const debounce = require("lodash.debounce");

const getTime = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

const log = message => {
  console.log('\x1b[36m%s\x1b[0m', message);
};

const GENERATE_CMD = "env PATTERNLAB_LOCAL_SERVER=1 php core/console --generate";
const COPY_CMD = "cp -a ./build/. ./public/build/";

const copyAssets = () => exec(COPY_CMD, (error, stdout, stderr) => {
  log(`✔ Finished at ${getTime()}\n\n`)
  if (error) {
    // eslint-disable-next-line no-console
    console.error(`Error in "frontend-stack-pattern-lab": ${error}`);
    return;
  }
  if (stderr) {
    // eslint-disable-next-line no-console
    console.log(stderr);
  }
});

const runPatternlabGenerator = debounce(() => {
  log('✔ Regenerating public patternlab folder..');
  exec(GENERATE_CMD, (error, stdout, stderr) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(`Error in "frontend-stack-pattern-lab": ${error}`);
      return;
    }
    if (stderr) {
      // eslint-disable-next-line no-console
      console.log(stderr);
    }

    log('✔ Copying assets to public patternlab folder..');
    copyAssets();
  });
});

module.exports = (neutrino, options = {}) => {
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
        "source/**/*.yml"
      ],
      ignored: "/node_modules/"
    }
  };

  // Merge options with defaults
  const pluginOptions = {
    ...defaults,
    ...options
  };

  neutrino.use(devServer, pluginOptions.devServer);

  neutrino.config
    .plugin("WriteFilePlugin")
    .use(new WriteFilePlugin(pluginOptions.writeFileOptions));

  neutrino.config.plugin("FilewatcherPlugin").use(
    new FilewatcherPlugin({
      watchFileRegex: pluginOptions.filWatcherOptions.watchFileRegex,
      onReadyCallback: runPatternlabGenerator,
      onChangeCallback: runPatternlabGenerator,
      ignored: pluginOptions.filWatcherOptions.ignored
    })
  );
};
