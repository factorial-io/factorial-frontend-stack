/* eslint-disable global-require */

const _ = require('lodash');
const defaults = require('./config.default.js');

module.exports = (gulp, options, tasks) => {
  const config = _.merge({}, defaults, options);

  if (config.css.enabled) {
    require('./tasks/css.js')(gulp, config, tasks);
  }

  if (config.js.enabled) {
    require('./tasks/js.js')(gulp, config, tasks);
  }
};
