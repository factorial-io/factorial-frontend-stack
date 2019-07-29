# Factorial frontend stack jest

> `@factorial/frontend-stack-jest` is Neutrino middleware for the [jest](https://jestjs.io/) test runner

## Features

* Uses [@neutrinojs/jest](https://neutrinojs.org/packages/jest/)
* Looks for test files in `__tests__` folder and by suffix `*.spec.js|*.test.js`

## Requirements

- Node.js ^8.10 or 10+
- Yarn v1.2.1+, or npm v5.4+
- Neutrino v8

## Installation

`@factorial/frontend-stack-jest` can be installed via the Yarn or npm clients.

## Usage

    yarn add neutrino @factorial/frontend-stack-pattern-jest --dev

Then add the following your `package.json`.

```json
"scripts": {
  "test": "yarn run neutrino test --use @factorial/frontend-stack-jest",
}
```

## Example

Another working example can be found at
https://github.com/factorial-io/factorial-frontend-stack/tree/master/examples/core
