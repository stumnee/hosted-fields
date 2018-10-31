var _ = require('lodash');
path = require('path');

var config = require(path.join(process.cwd(), 'config/default.config.js'));

// Get the current config
var environmentConfig = require(path.join(process.cwd(), 'config/', (process.env.NODE_ENV ? process.env.NODE_ENV : 'development') + '.config.js')) || {};

// Merge config files
config = _.merge(config, environmentConfig);

module.exports = config;