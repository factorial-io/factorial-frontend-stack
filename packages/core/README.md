# Factorial frontend stack core

> `@factorial-io/frontend-stack-core` is Neutrino middleware for building CSS and JS files.

## Features

- Build CSS files using our standard PostCSS plugins
- Stylelint CSS using SUIT CSS configuration
- Transpile JS using babel
- Eslint JS using airbnb + prettier
- Automatically resolve paths to images and fonts, inline when suitable
- Watch file changes when in development
- Minify CSS and JS when building for production
- Treeshaking for JavaScript modules when building for production

## Requirements

- Node.js ^8.10 or 10+
- Yarn v1.2.1+, or npm v5.4+
- Neutrino v8

## Installation

`@factorial-io/frontend-stack-core` can be installed via the Yarn or npm clients.

## Usage

    yarn add @factorial-io/frontend-stack-core --dev

Then add the following your `package.json`.

```
"scripts": {
  "start": "yarn run neutrino start --use @factorial-io/frontend-stack-core",
  "build": "yarn run neutrino build --use @factorial-io/frontend-stack-core --options.env.NODE_ENV production"
}
```

Default entry point is `./src/index.js`.