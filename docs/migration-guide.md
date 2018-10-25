# Migration guide
> You want to migrate an existing project from our gulp-based stack to @factorial/frontend-stack-core

NB: Currently the following tasks are not yet replaced:
* Automatic generation if SVG sprite maps
* Automatic exporting of colours to JSON from PostCSS variables
* Running a dev server for serving pattern lab.

Follow the [`feature`](https://github.com/factorial-io/factorial-frontend-stack/issues?q=is%3Aissue+is%3Aopen+label%3Afeature) tag in the issue queue to get updates on that.
If you want to use `@factorial/frontend-stack-core` now, this means that you need to run it in *parallel* to the gulp based version.

## Migration Steps
1. Install [@factorial/frontend-stack-core](https://github.com/factorial-io/factorial-frontend-stack/tree/master/packages/core).
2. Create `.neutrinorc.js`, [change paths if needed](https://github.com/factorial-io/factorial-frontend-stack/tree/master/packages/core#how-do-i-change-entry-output-paths-for-my-project).
3. Create `.eslintrc.js` and `.stylelintrc.js` files [as instructed in the FAQ](https://github.com/factorial-io/factorial-frontend-stack/tree/master/packages/core#setup-modules-of-stylelintrc-and-eslintrc). Delete any other `.eslintrc` and `.stylelintrc` files that might be in the project.
4. Setup tasks in `package.json`, [see usage example](https://github.com/factorial-io/factorial-frontend-stack/blob/master/examples/core/package.json#L13). Use a namespace, if they are conflicting with your existing tasks.
5. Remove the following tasks from the projects’ [gulpfile](https://github.com/factorial-io/factorial-frontend-stack/blob/master/packages/gulp/gulpfile.babel.js):
	* `build:css`
	* `build:js`
	* `watch:css`
	* `watch:js`
	* `lint:js`
	* `lint:css`
6.  `require("./index.css")` in the js entry point of your project to start the dependency chain for CSS.
7. Try running a first build you will receive a lot of lint errors.
8. `Autofix` code style errors for the whole code base / frontend theme. Commit. [See the fix tasks in the usage example](https://github.com/factorial-io/factorial-frontend-stack/blob/master/examples/core/package.json#L20). Commit the stylistic fixes.
9. Run the neutrino `start` and `build` tasks in conjunction with the remaining gulp.file
10. Remove all obsolete dependencies from `package.json` :)