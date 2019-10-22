# Factorial frontend stack SVG sprite loader

> `@factorial/frontend-stack-svg-sprite` is Neutrino middleware for creating a svg spritemap from imported SVG files.

## Features

- Import SVG files from javascript files
- A spritemap with all imported SVG files is created
- Spritemap is automatically injected into DOM
- SVG markup is cleaned with [SVGO loader](https://github.com/rpominov/svgo-loader):
  - removing all fill and stroke color settings (good for single color icons)
  - removing unneccessary markup

## Requirements

- [@factorial/frontend-stack-core](https://github.com/factorial-io/factorial-frontend-stack/tree/master/packages/core) middleware is required

## Installation

`@factorial/frontend-stack-svg-sprite` can be installed via the Yarn or npm clients.

## Usage

    yarn add neutrino @factorial/frontend-stack-svg-sprite --dev

Then add the following your `.neutrinorc.js`.

```javascript
use: [
  "@factorial/frontend-stack-core",
  "@factorial/frontend-stack-pattern-lab",
  "@factorial/svg-sprite", // <- add this line
],
```

## Example usage

Import all your SVG files via javascript import statements:

```javascript
import "./svgs/home.svg";
import "./svgs/close.svg";
```

Once imported, you can use them with this HTML snippet:
```html
<svg>
  <use xlink:href="#home"></use>
</svg>

<svg>
  <use xlink:href="#close"></use>
</svg>
```
