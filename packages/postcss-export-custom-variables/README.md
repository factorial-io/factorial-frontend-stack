# Factorial frontend stack postcss-export-custom-variables

> `@factorial/frontend-stack-postcss-export-custom-variables` is Neutrino middleware for [postcss-export-custom-variables](https://github.com/jonathantneal/postcss-export-custom-variables)

## Features

- Exports PostCSS variables to a JSON file for further consumption in a twig/js tool chain.

## Requirements

- Node.js ^8.10 or 10+
- Yarn v1.2.1+, or npm v5.4+
- Neutrino v8

## Installation

`@factorial/frontend-stack-postcss-export-custom-variables` can be installed via the Yarn or npm clients.

## Usage

    yarn add neutrino @factorial/frontend-stack-core @factorial/frontend-stack-postcss-export-custom-variables --dev

Then add the following your `package.json`.

```json
"scripts": {
  "start": "yarn run neutrino start --use @factorial/frontend-stack-core @factorial/frontend-stack-postcss-export-custom-variables",
  "build": "yarn run neutrino build --use @factorial/frontend-stack-core @factorial/frontend-stack-postcss-export-custom-variables --options.env.NODE_ENV production"
}
```

## Options

This middleware exposed the same options as [postcss-export-custom-variables](https://github.com/jonathantneal/postcss-export-custom-variables#advanced-options), but sets the following defaults:

name | value
---|---
`destination` | "./source/_patterns/01-theme/theme.json"
`exporter` | A custom JSON export that wraps all properties in a "variables" key.
