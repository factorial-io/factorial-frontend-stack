# Factorial frontend stack 

> A functional boilerplate of the Factorial frontend stack 

## Prerequisites

* [node.js](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/en/)

## Installation

    $ yarn install

## Available tasks
 
`yarn run ...` | Description
---|---
build | Compile and bundle all CSS and JS files.
build:css | Compile and bundle all CSS files to `build/index.css`.
build:js | Compile and bundle all JS files to `build/index.js`.
build:test | Copy and preprocess idiomatic test files to `build`.
deploy | Deploy `gh-pages` branch.
start | Start a development server at `http://localhost:8080`.
test | Run all tests. 
test:browser | Run all browser tests.
lint | Lint all CSS and JS files.
lint:css | Lint all CSS files.
lint:js | Lint all JS files.
watch | Watch for file changes in `lib` and trigger a new build.

## Autofix Coding Style Errors

This is a work in progress towards automatic standardization of our code style. 
These are descructive operations that *overwrite* their respective sources. Use 
with caution. 

`yarn run ...` | Description
---|---
check:eslint | Check for conflicts between existing eslint configuration and prettier
check:stylelint | Check for conflicts between existing stylelint configuration and prettier
fix | Fix coding style errors. 
fix:css | Fix CSS coding style through stylelint. 
fix:js | Fix JS coding style through eslint/prettier. 

### CSS 

