const frontendStackCore = require("@factorial/frontend-stack-core");
const frontendStackJest = require("@factorial/frontend-stack-jest");

module.exports = {
  use: [frontendStackCore(), frontendStackJest()],
};
