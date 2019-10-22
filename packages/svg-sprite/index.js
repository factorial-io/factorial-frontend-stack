module.exports = (neutrino, opts = {}) => {
  neutrino.config.module.rules.delete('svg');

  neutrino.config.module
    .rule('svg')
      .clear()
      .pre()
      .test(neutrino.regexFromExtensions(['svg']))
      .include
        .add(neutrino.options.source)
        .end()
      .use('svg-sprite')
        .loader(require.resolve('svg-sprite-loader'))
        .end()
      .use('svgo')
        .loader(require.resolve('svgo-loader'))
          .options({
            plugins: [
              { removeTitle: true },
              { removeAttrs: { attrs: '(fill|stroke)' } },
            ]
          })
};
