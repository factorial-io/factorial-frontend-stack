module.exports = {
  use: [
    "@factorial/frontend-stack-core",
    ["@neutrinojs/dev-server", {
      contentBase: 'build'
    }]
  ]
};
