const jest = require("@neutrinojs/jest");
const merge = require("deepmerge");

module.exports = (neutrino, opts = {}) => {
  const options = merge(
    {
      testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$"
    },
    opts
  );

  neutrino.use(jest, options);
};
