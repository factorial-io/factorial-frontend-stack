# Faq

## Why is my CSS not compiled?

You need to import the CSS in your JavaScript entry point so the dependency chain can be started.

```js
import "./index.css";
```

> https://github.com/factorial-io/factorial-frontend-stack/blob/master/example/src/index.js#L3

## How do I setup CSS/JS linting in my IDE/editor?

### Add a `.neutrinorc.js` to the project.

    touch .neutrinorc.js

Then add the following to `.neutrinorc.js`.

```js
module.exports = {
  use: [
    "@factorial/frontend-stack-core"
  ]
};
```

You can ommit the `--use` flag in npm scripts then.

> https://neutrinojs.org/usage.html#using-multiple-presets

### Setup modules of `stylelintrc` and `eslintrc`

You need to setup a `stylelintrc.js` and `eslintrc.js` in your project that uses the configuration provided from the neutrino instance.
That way linting through CLI and editor is synced and no config is duplicated.

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

## How do I change the entry and output paths for my project?

You can ovveride the defaults path options in `.neutrinorc.js`.

> https://neutrinojs.org/customization/#overriding-neutrino-options

### Example

```js
options: {
  source: "source",
  output: "source/build",
  mains: {
    index: "index.js"
  }
}
```

## How can I setup multiple entry points in my project?

You can set multiple entry points through the mains option in `.neutrinorc.js`.

> https://neutrinojs.org/customization/#optionsmains

### Example

```js
module.exports = {
  use: [
    "@factorial/frontend-stack-core"
  ],
  options: {
    mains: {
      a: "a",
      b: "b"
    }
  }
};
```
