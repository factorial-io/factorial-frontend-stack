# Factorial frontend stack core

> `@factorial/frontend-stack-core` is Neutrino middleware for building CSS and JS files.

## Features

- Build CSS files using our standard PostCSS plugins
- Stylelint CSS using SUIT CSS configuration
- Transpile JS using babel
- Eslint JS using airbnb + prettier
- Automatically resolve paths to images and fonts, inline when suitable
- Watch file changes when in development
- Minify CSS and JS when building for production
- Treeshaking for JavaScript modules when building for production
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

```
"scripts": {
  "start": "yarn run neutrino start --use @factorial/frontend-stack-core",
  "build": "yarn run neutrino build --use @factorial/frontend-stack-core --options.env.NODE_ENV production"
}
```

Default entry point is `./src/index.js`.

## FAQ

### How do I setup CSS/JS linting in my editor?

You need to setup a `stylelintrc.js` and `eslintrc.js` in your project that uses the configuration provided from the neutrino instance. That way linting through CLI and editor is synced and no config is duplicated.

```js
// .eslintrc.js
const { Neutrino } = require('neutrino');

// Specify middleware to Neutrino prior to calling eslintrc.
// Even if using .neutrinorc.js, you must specify it when using
// the API
module.exports = Neutrino({ root: __dirname })
  .use('.neutrinorc.js')
  .call('eslintrc');
```
> https://neutrinojs.org/packages/eslint/#eslintrc-config

```js
// .stylelintrc.js
const { Neutrino } = require('neutrino');

// Specify middleware to Neutrino prior to calling stylelintrc.
// Even if using .neutrinorc.js, you must specify it when using
// the API
module.exports = Neutrino({ root: __dirname })
  .use('.neutrinorc.js')
  .call('stylelintrc');
```

> https://neutrinojs.org/packages/stylelint/#stylelintrc-config