# Factorial frontend stack pattern-lab

> `@factorial/frontend-stack-pattern-lab` is Neutrino middleware that creates a dev-server that serves your patternlab files.

::: warning Heads up
This package has an implicit dependency to [pattern-lab-edition-factorial](https://github.com/factorial-io/pattern-lab-edition-factorial)
:::

## Features

- Runs the neutrinojs dev server in localhost:5000
- Serves the patternlab **/public** folder
- Replaces the patternlab dev server
- Writes files to the build folder on file change
- Can be run in parallel with **core** in the terminal (see -> Usage)
- Configurable dev-server options (see -> Usage)

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

### Run dev-server and patternlab watcher in parallel

To run both the dev-server and pattern-lab watch task in parallel with just one terminal command add this snippet to your packages.json (replacing other commands with same name):

```json
"scripts": {
  "dev:neutrino": "yarn run neutrino start",
  "dev:patternlab": "php core/console --watch",
  "start": "run-p dev:*",
}
```

### Add dev-server custom options

You can easily configure this middleware by giving the middleware a JS object with the following options:

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

A list of available options can be found in the respective plugins documentation:

- [neutrino dev-server documentation](https://neutrinojs.org/packages/dev-server/)
- [write-file-webpack-plugin](https://www.npmjs.com/package/write-file-webpack-plugin)
- [filewatcher-webpack-plugin](https://www.npmjs.com/package/filewatcher-webpack-plugin)
