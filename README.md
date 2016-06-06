# Factorial frontend stack 

> A functional boilerplate of the Factorial frontend stack 

## Prerequisites

* [node.js](https://nodejs.org/en/)

## Installation

    $ npm install

## Available tasks

`npm run ...` | Description
---|---
build | Compile and bundle all CSS and JS files.
build:css | Compile and bundle all CSS files to `dist/index.css`.
build:js | Compile and bundle all JS files to `dist/index.js`.
start | Start a development server at `http://localhost:8080`.
test | Run all tests.
test:unit | Run all unit tests.*
test:browser | Run all browser tests.*
test:lint-css | Lint all CSS files.
test:lint-js | Lint all JS files.
watch | Watch for file changes in `src` and trigger a new build.*

## Secondary

`npm run ...` | Description
---|---
build:svg | Create SVG sprites.*
build:clean | Delete all files in `dist`.*
deploy | *
deploy:gh-pages | Deploy the `gh-pages` branch.*
deploy:changelog | Update the changelog in `README.md`*
deploy:tag | Create a new git tag with the current version.*
deploy:publish | Publish to the npm registry. *
deploy:version | Bump the current version.*
start | Start a development server at `http://localhost:3000`.*
