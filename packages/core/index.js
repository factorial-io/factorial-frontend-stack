const { join, basename } = require("path");
const styles = require("@neutrinojs/style-loader");
const images = require("@neutrinojs/image-loader");
const fonts = require("@neutrinojs/font-loader");
const stylelint = require("@neutrinojs/stylelint");
const clean = require("@neutrinojs/clean");
const lint = require("@neutrinojs/eslint");
const compileLoader = require("@neutrinojs/compile-loader");
const merge = require("deepmerge");
const minify = require("@neutrinojs/babel-minify");
const styleMinify = require("@neutrinojs/style-minify");
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
    options.targets.browsers = [
      "last 2 Chrome versions",
      "last 2 Firefox versions",
      "last 2 Edge versions",
      "last 2 Opera versions",
      "last 2 Safari versions",
      "last 2 iOS versions"
    ];
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

  neutrino.config
    .context(neutrino.options.root)
    .entry("index")
    .add(neutrino.options.mains.index)
    .end()
    .output.path(neutrino.options.output)
    .publicPath(options.publicPath)
    .end();

  neutrino
    .use(clean, {
      paths: [neutrino.options.output]
    })
    .use(lint, {
      eslint: {
        baseConfig: {
          extends: [
            "airbnb-base",
            "plugin:prettier/recommended"
          ],
          plugins: [
            "prettier"
          ],
          rules: {
            "prettier/prettier": "error"
          },
        },
        envs: [
          "es6",
          "browser"
        ]
      }
    });
  neutrino
    .use(compileLoader, {
      include: [neutrino.options.source, neutrino.options.tests],
      exclude: [staticDir],
      babel: options.babel
    })
    .use(stylelint, {
      config: {
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
              require("postcss-import"),
              require("postcss-custom-properties"),
              require("postcss-calc"),
              require("postcss-color-function"),
              require("postcss-custom-media"),
              require("autoprefixer")
            ]
          }
        }
      ]
    })
    .use(images)
    .use(fonts);

  neutrino.config
    .when(isProduction, () => neutrino.use(minify))
    .when(isProduction, () => neutrino.use(styleMinify))
    // Adds source maps
    // TODO: Find a way to sourcemap CSS when extracting in production
    .when(
      isProduction,
      config => config.devtool("source-map"),
      config => config.devtool("inline-source-map")
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
