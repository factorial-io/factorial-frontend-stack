# Factorial frontend stack SVG sprite loader

> `@factorial/frontend-stack-svg-sprite` is Neutrino middleware for creating a svg spritemap from imported SVG files.

## Features

- Import SVG files from javascript files
- A spritemap with all imported SVG files is created
- Spritemap is automatically injected into DOM
- SVG are cleaned with [SVGO loader](https://github.com/rpominov/svgo-loader)

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
import "./svgs/close.svg";
import "./svgs/home.svg";
import "./svgs/down.svg";
import "./svgs/profile.svg";
```

Once imported, you can use them with this HTML snippet:
```html
<svg>
  <use xlink:href="#{{ NAME_VARIABLE }}"></use>
</svg>
```
`NAME_VARIABLE` is the name of the svg file, e.g. "close", "home", etc.


