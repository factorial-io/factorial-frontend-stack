# Factorial frontend stack pattern lab

> `@factorial/frontend-stack-pattern-lab` is Neutrino middleware that runs a dev-server for your pattern lab files.

::: warning Heads up
This package has an implicit dependency to [pattern-lab-edition-factorial](https://github.com/factorial-io/pattern-lab-edition-factorial)
:::

## Features

- Serves patternlab in a dev server at `http://localhost:5000`
- Watch for pattern lab file changes and generates pattern lab in development mode

## Requirements

- Node.js ^8.10 or 10+
- Yarn v1.2.1+, or npm v5.4+
- Neutrino v8

## Installation

`@factorial/frontend-stack-pattern-lab` can be installed via the Yarn or npm clients.

## Usage

    yarn add neutrino @factorial/frontend-stack-pattern-lab --dev

Then add the following your `package.json`.

```json
"scripts": {
  "start": "yarn run neutrino start --use @factorial/frontend-stack-pattern-lab",
}
```

### Configuration

You can change the default configuration of this middleware by providing an
object with the following options in `.neutrionorc.js` at project level.

```js
module.exports = {

  use: [
    // ... other middlewares here
    [
      "@factorial/frontend-stack-pattern-lab",
      {
        devServer: {
          // Add your dev-server custom options here
          port: 5001,
        },
        fileWatcherOptions: {
          // Add your file-watcher custom options here
          watchFileRegex: [
            "source/**/*.twig",
            "source/**/*.json"
          ],
        },
        writeFileOptions: {
          // Add your write-file custom options here
          atomicReplace: true
        }
      }
    ],
  ],
  options: {
    // ... general neutrinojs options here
  }
};
```

### Further reading

A list of available options can be found in the respective plugins documentation:

- [neutrino dev-server documentation](https://neutrinojs.org/packages/dev-server/)
- [write-file-webpack-plugin](https://www.npmjs.com/package/write-file-webpack-plugin)
- [filewatcher-webpack-plugin](https://www.npmjs.com/package/filewatcher-webpack-plugin)
