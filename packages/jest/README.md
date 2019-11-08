# Factorial frontend stack jest

> `@factorial/frontend-stack-jest` is Neutrino middleware for the [jest](https://jestjs.io/) test runner

## Features

- Uses [@neutrinojs/jest](https://neutrinojs.org/packages/jest/)
- Looks for test files in `__tests__` folder and by suffix `*.spec.js|*.test.js`

## Requirements

- Node.js ^8.10 or 10+
- Yarn v1.2.1+, or npm v5.4+
- Neutrino v8

## Installation

`@factorial/frontend-stack-jest` can be installed via the Yarn or npm clients.

## Usage

    yarn add neutrino @factorial/frontend-stack-jest --dev

Then add the following your `package.json`.

```json
"scripts": {
  "test": "neutrino test --use @factorial/frontend-stack-jest",
}
```

## Configuration

You can change the default location where jest should look for test files by
providing a regular expression in the middleware options.

```js
module.exports = {
  use: [
    [
      "@factorial/frontend-stack-jest",
      {
        testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$"
      }
    ],
  ],
```
