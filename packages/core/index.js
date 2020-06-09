const { join } = require("path");
const merge = require("deepmerge");
const compileLoader = require("@neutrinojs/compile-loader");
const fonts = require("@neutrinojs/font-loader");
const images = require("@neutrinojs/image-loader");
const lint = require("@neutrinojs/eslint");
const styleMinify = require("@neutrinojs/style-minify");
const styles = require("@neutrinojs/style-loader");

const stylelint = require("stylelint-webpack-plugin");
const postcssImport = require("postcss-import");
const postcssCustomProperties = require("postcss-custom-properties");
const postcssCalc = require("postcss-calc");
const postcssColorFunction = require("postcss-color-function");
const postcssCustomMedia = require("postcss-custom-media");
const autoprefixer = require("autoprefixer");

const MODULES = join(__dirname, "node_modules");

module.exports = (neutrino, opts = {}) => {
  const isProduction = process.env.NODE_ENV === "production";
  const publicPath = opts.publicPath || "./";
  const options = merge(
    {
      publicPath,
      minify: {
        source: isProduction,
      },
      polyfills: {
        async: true,
      },
      babel: {},
      targets: {},
    },
    opts
  );

  if (!options.targets.node && !options.targets.browsers) {
    options.targets.browsers = ["last 2 versions", ">0.5%", "not ie 10"];
  }

  Object.assign(options, {
    babel: compileLoader(
      {
        plugins: [
          require.resolve("@babel/plugin-syntax-dynamic-import"),
          require.resolve("@babel/plugin-proposal-object-rest-spread"),
        ],
        presets: [
          [
            require.resolve("@babel/preset-env"),
            {
              debug: neutrino.options.debug,
              useBuiltIns: true,
              shippedProposals: true,
              targets: options.targets,
            },
          ],
        ],
      },
      options.babel
    ),
  });

  const staticDir = join(neutrino.options.source, "static");

  // Enable multiple entry points
  const { mains } = neutrino.options;
  Object.keys(mains).forEach((key) => {
    neutrino.config.entry(key).add(mains[key]);
  });

  neutrino.config
    .context(neutrino.options.root)
    .output.path(neutrino.options.output)
    .publicPath(options.publicPath)
    .end();

  neutrino
    // Use lint to lint JS
    .use(lint, {
      eslint: {
        baseConfig: {
          extends: ["airbnb-base", "plugin:prettier/recommended"],
          plugins: ["prettier"],
          rules: {
            "prettier/prettier": "error",
          },
        },
        envs: ["browser"],
      },
    })
    // Use neutrino compile -loader for ES6 to ES5 with babel
    .use(compileLoader, {
      include: [neutrino.options.source, neutrino.options.tests],
      exclude: [staticDir],
      babel: options.babel,
    })
    // Use neutrino eslint for JS linting
    // .use(stylelint, {
    //   config: {
    //     ignoreFiles: "./source/build/**",
    //     extends: [require.resolve("stylelint-config-suitcss")],
    //     plugins: [require.resolve("stylelint-selector-bem-pattern")],
    //     rules: {
    //       "plugin/selector-bem-pattern": {
    //         preset: "suit",
    //         presetOptions: {
    //           namespace: "",
    //         },
    //       },
    //     },
    //   },
    // })
    // Use styles to extract css from JS with postcss and postcss plugins
    .use(
      styles({
        css: {
          importLoaders: opts.loaders ? opts.loaders.length : 0,
        },
        modules: false,
        loaders: [
          {
            loader: "postcss-loader",
            useId: "postcss",
            options: {
              plugins: [
                postcssImport,
                postcssCustomProperties({
                  preserve: false,
                }),
                postcssCalc,
                postcssColorFunction,
                postcssCustomMedia,
                autoprefixer,
              ],
            },
          },
        ],
        extract: {
          enabled: true,
          loader: {
            esModule: true,
          },
          plugin: {
            filename: "[name].css",
          },
        },
      })
    )
    .use(images)
    .use(
      fonts({
        name: "[name].[ext]",
      })
    );

  neutrino.config
    .when(
      isProduction,
      (config) => {
        config.devtool("source-map");
      },
      (config) => {
        config.devtool("inline-source-map");
      }
    )
    .resolve.modules.add("node_modules")
    .add(neutrino.options.node_modules)
    .add(MODULES)
    .when(__dirname.includes("neutrino-dev"), (modules) => {
      // Add monorepo node_modules to webpack module resolution
      modules.add(join(__dirname, "../../node_modules"));
    })
    .end()
    .extensions.merge(
      neutrino.options.extensions.concat("json").map((ext) => `.${ext}`)
    )
    .end()
    .end()
    .resolveLoader.modules.add(neutrino.options.node_modules)
    .add(MODULES)
    .when(__dirname.includes("neutrino-dev"), (modules) => {
      // Add monorepo node_modules to webpack module resolution
      modules.add(join(__dirname, "../../node_modules"));
    })
    .end()
    .end();
};
