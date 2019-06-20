const path = require("path");
const fs = require("fs");

// Just wraps everything in  a "variables" key so we can iterate over it in twig
// @see: https://github.com/jonathantneal/postcss-export-custom-variables/blob/master/index.js#L125
function jsonExporter(variables, options, root) {
	const pathname = options.destination || root.source && root.source.input && root.source.input.file && root.source.input.file + '.json' || 'custom-variables.json';
	const contents = JSON.stringify({ "variables": variables }, null, '  ');

	return new Promise((resolve, reject) => {
		fs.writeFile(
			pathname,
			contents,
			(error) => error ? reject(error) : resolve()
		);
	});
}

module.exports = (neutrino, options = {}) => {
  // Set default options, based on pattern lab use case
  // @see: https://github.com/jonathantneal/postcss-export-custom-variables#postcss
  const defaults = {
    destination: path.resolve("source/_patterns/00-theme/theme.json"),
    exporter: jsonExporter,
  }

  // Merge options with defaults
  const pluginOptions = {
    ...defaults,
    ...options,
  };

  // Get the existing style rules
  const styleRule = neutrino.config.module.rule('style');

  // Save a reference to the existing style loaders
  const styleLoaders = Array.from(styleRule.uses.store.keys())
    .filter((key) => key !== 'style')
    .map((key) => styleRule.use(key))
    .map((use) => {
      return {
        loader: use.get('loader'),
        options: use.get('options')
      };
    });

  // Clear the existing style loaders
  styleRule.uses.clear();

  // Iterate over the saved references
  styleLoaders.forEach((styleLoader) => {
    const { loader, options } = styleLoader;

    // When we match with postcss loader, add the exporter to the set
    // of PostCSS plugins
    if (path.dirname(loader).indexOf("postcss-loader") > -1) {
      options.plugins.push(require("postcss-export-custom-variables")(pluginOptions));
    }

    // Add style rules again
    styleRule.use(loader).loader(loader).options(options);
  });
};
