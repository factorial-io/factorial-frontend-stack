# Factorial frontend stack core

> `@factorial/frontend-stack-core` is Neutrino middleware for building CSS and JS files.

## Features

- Build CSS files using our standard PostCSS plugins.
- Stylelint CSS using SUIT CSS configuration.
- Transpile JS using babel.
- Eslint JS using airbnb + prettier
- Sets `browser` env as default eslint environment.
- Automatically resolve paths to images and fonts, inline when suitable.
- Watch file changes when in development.
- Minify CSS and JS when building for production.
- Treeshaking for JavaScript modules when building for production.
- Automatic code style fixes (where doable) though stylelint and prettier.

## Requirements

- Node.js ^8.10 or 10+
- Yarn v1.2.1+, or npm v5.4+
- Neutrino v8

## Installation

`@factorial/frontend-stack-core` can be installed via the Yarn or npm clients.

## Usage

    yarn add neutrino @factorial/frontend-stack-core --dev

Then add the following your `package.json`.

```json
"scripts": {
  "start": "yarn run neutrino start --use @factorial/frontend-stack-core",
  "build": "yarn run neutrino build --use @factorial/frontend-stack-core --options.env.NODE_ENV production"
}
```

Default entry point is `./src/index.js`.

## Example

An example can that consumes `@factorial/frontend-stack-core` can be found at

[https://github.com/factorial-io/factorial-frontend-stack/tree/master/example](https://github.com/factorial-io/factorial-frontend-stack/tree/master/example)
