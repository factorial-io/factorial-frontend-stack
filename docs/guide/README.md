# Introduction

The Factorial frontend stack offers a set of opinionated defaults for writing
frontend applications.

## How it works

We use [neutrino.js](https://neutrinojs.org) and a set of custom build
middlewares to abstract away the repeating and cumbersome parts of webpack
configuration. Features are split into indivual packages that can be combined
depending on your project's needs.

## Getting started

```
$ yarn add neutrino @factorial/frontend-stack-core --dev
```

Then add the following your `package.json`.

```json
"scripts": {
  "start": "yarn run neutrino start --use @factorial/frontend-stack-core",
  "build": "yarn run neutrino build --use @factorial/frontend-stack-core --options.env.NODE_ENV production"
}
```

Default entry point is `./src/index.js`.
