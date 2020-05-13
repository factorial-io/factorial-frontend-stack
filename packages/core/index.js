const { join } = require("path");
const merge = require("deepmerge");
const compileLoader = require("@neutrinojs/compile-loader");
const fonts = require("@neutrinojs/font-loader");
const images = require("@neutrinojs/image-loader");
const lint = require("@neutrinojs/eslint");
const minify = require("@neutrinojs/babel-minify");
const stylelint = require("@neutrinojs/stylelint");
const styleMinify = require("@neutrinojs/style-minify");
const styles = require("@neutrinojs/style-loader");

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
        source: isProduction
      },
      polyfills: {
        async: true
      },
      babel: {},
      targets: {}
    },
    opts
  );

  if (!options.targets.node && !options.targets.browsers) {
    options.targets.browsers = ["last 2 versions", ">0.5%", "not ie 10"];
  }

  // Using babel settings from @neutrinojs/web, should upgrade to babel7, once
  // 9.0 is released
  Object.assign(options, {
    babel: compileLoader.merge(
      {
        plugins: [
          ...(options.polyfills.async
            ? [[require.resolve("fast-async"), { spec: true }]]
            : []),
          require.resolve("babel-plugin-syntax-dynamic-import"),
          require.resolve("babel-plugin-transform-object-rest-spread")
        ],
        presets: [
          [
            require.resolve("babel-preset-env"),
            {
              debug: neutrino.options.debug,
              modules: false,
              useBuiltIns: true,
              exclude: options.polyfills.async
                ? ["transform-regenerator", "transform-async-to-generator"]
                : [],
              targets: options.targets
            }
          ]
        ]
      },
      options.babel
    )
  });

  const staticDir = join(neutrino.options.source, "static");

  // Enable multiple entry points
  const { mains } = neutrino.options;
  Object.keys(mains).forEach(key => {
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
            "prettier/prettier": "error"
          }
        },
        envs: ["browser"]
      }
    });

  neutrino
    // Use neutrino compile -loader for ES6 to ES5 with babel
    .use(compileLoader, {
      include: [neutrino.options.source, neutrino.options.tests],
      exclude: [staticDir],
      babel: options.babel
    })
    // Use neutrino eslint for JS linting
    .use(stylelint, {
      config: {
        ignoreFiles: "./source/build/**",
        extends: [require.resolve("stylelint-config-suitcss")],
        plugins: [require.resolve("stylelint-selector-bem-pattern")],
        rules: {
          "plugin/selector-bem-pattern": {
            preset: "suit",
            presetOptions: {
              namespace: ""
            }
          }
        }
      }
    })
    // Use styles to extract css from JS with potcss and postcss plugins
    .use(styles, {
      extract: {
        plugin: {
          filename: "[name].css"
        }
      },
      loaders: [
        {
          loader: require.resolve("postcss-loader"),
          useId: "postcss",
          options: {
            plugins: [
              postcssImport,
              postcssCustomProperties({
                preserve: false
              }),
              postcssCalc,
              postcssColorFunction,
              postcssCustomMedia,
              autoprefixer
            ]
          }
        }
      ]
    })
    .use(images)
    .use(fonts, {
      name: "[name].[ext]",
    });

  neutrino.config
    .when(isProduction, () => neutrino.use(minify))
    .when(isProduction, () => neutrino.use(styleMinify))
    .when(
      isProduction,
      config => {
        config.devtool("source-map");
      },
      config => {
        config.devtool("inline-source-map");
      }
    )
    .resolve.modules.add("node_modules")
    .add(neutrino.options.node_modules)
    .add(MODULES)
    .when(__dirname.includes("neutrino-dev"), modules => {
      // Add monorepo node_modules to webpack module resolution
      modules.add(join(__dirname, "../../node_modules"));
    })
    .end()
    .extensions.merge(
      neutrino.options.extensions.concat("json").map(ext => `.${ext}`)
    )
    .end()
    .end()
    .resolveLoader.modules.add(neutrino.options.node_modules)
    .add(MODULES)
    .when(__dirname.includes("neutrino-dev"), modules => {
      // Add monorepo node_modules to webpack module resolution
      modules.add(join(__dirname, "../../node_modules"));
    })
    .end()
    .end();
};
