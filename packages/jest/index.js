const jest = require("@neutrinojs/jest");

module.exports = {
  use: [
    [
      jest, 
      {
        testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$"
      }
    ],
  ]
};
